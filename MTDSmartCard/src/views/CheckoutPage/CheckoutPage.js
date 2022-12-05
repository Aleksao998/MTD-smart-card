import React, { useState } from "react";
import { Button, Form, Input, Row, Col } from "reactstrap";
import DemoFooter from "components/Footers/DemoFooter.js";
import { useAlert } from "react-alert";
import { isTemplateSpan } from "typescript";
var defaultConfig = require("../../default");
const CheckoutPage = (props) => {
  document.documentElement.classList.remove("nav-open");

  const alert = useAlert();
  const [refresh, setRefresh] = useState(true);
  const [validateName, setValidateName] = useState("");
  const [validateLastName, setValidateLastName] = useState("");
  const [validateAddress, setValidateAddress] = useState("");
  const [validateCity, setValidateCity] = useState("");
  const [validatePostCode, setValidatePostCode] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [validatePhoneNumber, setValidatePhoneNumber] = useState("");
  const [validateNumberCard, setValidateNumberCard] = useState("");
  const [validateAddressNum, setValidateAddressNum] = useState("");
  const [state, setState] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    addressNum: "",
  });
  const [arrayOfUserNames, setArrayOfUserNames] = useState([]);
  const [validateArrayOfUserNames, setValidateArrayOfUserNames] = useState([]);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleOnChangeArray = (event) => {
    const { name, value } = event.target;
    console.log(arrayOfUserNames[name]);
    console.log(value, name);
    var list = arrayOfUserNames;
    list[name] = value;
    setArrayOfUserNames(list);
    setRefresh(!refresh);
  };
  const submit = () => {
    var error = false;
    setRefresh(!refresh);
    for (var i = 0; i < state.cardNumber; i++) {
      console.log(arrayOfUserNames[i]);
      if (arrayOfUserNames[i] === "" || arrayOfUserNames[i] === undefined) {
        var list = validateArrayOfUserNames;
        list[i] = "has-danger";
        setValidateArrayOfUserNames(list);
        error = true;
      } else {
        console.log("usao");
        var list = validateArrayOfUserNames;
        list[i] = "has-success";
        setValidateArrayOfUserNames(list);
      }
    }
    if (state.name === "") {
      setValidateName("has-danger");

      error = true;
    } else {
      setValidateName("has-success");
    }
    if (state.addressNum === "") {
      setValidateAddressNum("has-danger");
      error = true;
    } else {
      setValidateAddressNum("has-success");
    }
    if (state.lastName === "") {
      setValidateLastName("has-danger");
      error = true;
    } else {
      setValidateLastName("has-success");
    }
    if (state.address === "") {
      setValidateAddress("has-danger");
      error = true;
    } else {
      setValidateAddress("has-success");
    }
    if (state.city === "") {
      setValidateCity("has-danger");
      error = true;
    } else {
      setValidateCity("has-success");
    }
    if (state.postCode === "") {
      setValidatePostCode("has-danger");
      error = true;
    } else {
      setValidatePostCode("has-success");
    }
    if (state.email === "") {
      setValidateEmail("has-danger");
      error = true;
    } else {
      setValidateEmail("has-success");
    }
    if (state.phoneNumber === "") {
      setValidatePhoneNumber("has-danger");
      error = true;
    } else {
      setValidatePhoneNumber("has-success");
    }
    if (state.cardNumber === "") {
      setValidateNumberCard("has-danger");
      error = true;
    } else {
      setValidateNumberCard("has-success");
    }
    if (error === true) {
      return;
    } else {
      fetch(defaultConfig.endpoint + "/order/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number: state.cardNumber,
          name: state.name,
          lastName: state.lastName,
          address: state.address,
          adressNum: state.addressNum,
          city: state.city,
          postCode: state.postCode,
          email: state.email,
          phoneNumber: state.phoneNumber,
          arrayOfUserNames: arrayOfUserNames,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Error creating User");
          }
          return res.json();
        })
        .then((resData) => {
          setState({
            name: "",
            lastName: "",
            address: "",
            addressNum: "",
            city: "",
            postCode: "",
            email: "",
            phoneNumber: "",
            cardNumber: "",
          });
          setArrayOfUserNames([]);
          setValidateName("");
          setValidateLastName("");
          setValidateAddress("");
          setValidateCity("");
          setValidatePostCode("");
          setValidateEmail("");
          setValidatePhoneNumber("");
          setValidateNumberCard("");
          setValidateAddressNum("");
          setValidateArrayOfUserNames([]);
          props.history.push({
            pathname: '/confirmOrder',
            state: { cardNumber: state.cardNumber, address: state.address, num: state.addressNum, city:state.city}
          })
        })
        .catch((err) => {
          console.log(err)
          alert.error("Technical error");
        });
    }
  };
  const userList = () => {
    var items = [];

    for (var i = 0; i < state.cardNumber; i++) {
      var userNum = i + 1;
      var placeholder = userNum + ". Cardholder name";
      items.push(
        <Col xs="12" md="12">
          <Input
          style={{marginBottom:"10px"}}
            type="text"
            placeholder={placeholder}
            name={i}
            value={arrayOfUserNames[i]}
            onChange={handleOnChangeArray}
            valid={validateArrayOfUserNames[i] === "has-success"}
            invalid={validateArrayOfUserNames[i] === "has-danger"}
          />
        </Col>
      );
    }
    return items;
  };
  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, [props.reload]);
  return (
    <div className="checkoutPage">
      <div className="checkout container" style={{ marginBottom: "40px" }}>
        <div className="row">
          <div className="col-md-8" style={{ backgroundColor: "white" }}>
            <div style={{ textAlign: "center" }}>
              <h3>Order now</h3>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h5 className="bolderChartText">Customer information</h5>
            </div>
            <form style={{ marginTop: "30px" }}>
              <div className="form-row">
                <Col className="marginBottomColCheckOut">
                  <Input
                    type="text"
                    placeholder="First name"
                    name="name"
                    value={state.name}
                    onChange={handleOnChange}
                    valid={validateName === "has-success"}
                    invalid={validateName === "has-danger"}
                  />
                </Col>
                <Col>
                  <Input
                    type="text"
                    placeholder="Last name"
                    required="true"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleOnChange}
                    valid={validateLastName === "has-success"}
                    invalid={validateLastName === "has-danger"}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col xs="9" md="5" className="marginBottomColCheckOut">
                  <Input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={state.address}
                    onChange={handleOnChange}
                    valid={validateAddress === "has-success"}
                    invalid={validateAddress === "has-danger"}
                  />
                </Col>
                <Col xs="3" md="5" className="marginBottomColCheckOut">
                  <Input
                    type="number"
                    placeholder="No"
                    name="addressNum"
                    value={state.addressNum}
                    onChange={handleOnChange}
                    valid={validateAddressNum === "has-success"}
                    invalid={validateAddressNum === "has-danger"}
                  />
                </Col>
                <Col md="5" className="marginBottomColCheckOut">
                  <Input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={state.city}
                    onChange={handleOnChange}
                    valid={validateCity === "has-success"}
                    invalid={validateCity === "has-danger"}
                  />
                </Col>
                <Col md="2">
                  <Input
                    type="text"
                    placeholder="Post code"
                    name="postCode"
                    value={state.postCode}
                    onChange={handleOnChange}
                    valid={validatePostCode === "has-success"}
                    invalid={validatePostCode === "has-danger"}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col>
                  <Input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleOnChange}
                    valid={validateEmail === "has-success"}
                    invalid={validateEmail === "has-danger"}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col md="9" className="marginBottomColCheckOut">
                  <Input
                    type="text"
                    placeholder="Phone number"
                    name="phoneNumber"
                    value={state.phoneNumber}
                    onChange={handleOnChange}
                    valid={validatePhoneNumber === "has-success"}
                    invalid={validatePhoneNumber === "has-danger"}
                  />
                </Col>
                <Col>
                  <Input
                    type="number"
                    placeholder="Number of cards"
                    name="cardNumber"
                    value={state.cardNumber}
                    onChange={handleOnChange}
                    valid={validateNumberCard === "has-success"}
                    invalid={validateNumberCard === "has-danger"}
                  />
                </Col>
              </div>
              <div className="form-row">
                {userList().map((value, index) => {
                  return value;
                })}
              </div>
            </form>
          </div>
          <div className="col-md-4" style={{ backgroundColor: "#f7fbff" }}>
            <div style={{ textAlign: "center" }}>
              <h4 className="borderBottomCart">Shopping cart</h4>
            </div>
            <div style={{ marginTop: "50px" }} className="borderBottomCart">
              <h5 className="bolderChartText">
                Number of cards:
                <span style={{ fontWeight: "300", float: "right" }}>
                  {state.cardNumber}
                </span>
              </h5>
              <h5 className="bolderChartText">
                Card Price:
                <span style={{ fontWeight: "300", float: "right" }}>
                  2500 rsd
                </span>
              </h5>
            </div>
            <div style={{ marginTop: "20px", marginBottom: "50px" }}>
              <h5 className="bolderChartText">
                Total price:
                <span style={{ fontWeight: "300", float: "right" }}>
                  {state.cardNumber ? parseInt(state.cardNumber) * 2500 : 0} rsd
                </span>
              </h5>
              <p style={{fontSize:"8px", marginTop:"0px"}}>*without shipping</p>
            </div>
          </div>
        </div>
        <Row>
          <Col>
            <Button
              block
              className="form-submit"
              color="success"
              onClick={submit}
            >
              {" "}
              Buy{" "}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CheckoutPage;
