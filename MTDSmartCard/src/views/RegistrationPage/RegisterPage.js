import React, { useState } from "react";
import validator from "validator";
import { withRouter } from "react-router-dom";

// reactstrap components
import { Button, Form, Input, FormGroup } from "reactstrap";
var defaultConfig = require("../../default");
// core components

function RegisterPage(props) {
  const [error, setError] = useState("");
  const [check, setCheck] = useState(true);
  const [selectedOption, setSelectedOption] = useState("male");
  const [state, setState] = useState({
    email: "",
    password: "",
    repassword: "",
  });
  const [validateEmail, setValidateEmail] = useState("");
  const [validatePass, setValidatePass] = useState("");
  const [validateRePass, setValidateRePass] = useState("");
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleCheck = () => {
    setCheck(!check);
  };
  const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
  };
  const createNewProfile = (event) => {
    event.preventDefault();
    setValidateEmail("has-success");
    setValidatePass("has-success");
    setValidateRePass("has-success");
    //Check if all fields are filed
    if (
      state.email === "" ||
      state.password === "" ||
      state.repassword === "" ||
      selectedOption === ""
    ) {
      if (state.email === "") setValidateEmail("has-danger");
      if (state.password === "") setValidatePass("has-danger");
      if (state.repassword === "") setValidateRePass("has-danger");

      setError("All field must be filed!");
      return;
    }
    //Check for valid email format
    if (validator.isEmail(state.email) !== true) {
      setValidateEmail("has-danger");
      setError("Email is not valid format!");
      return;
    }
    setValidateEmail("has-success");
    //simple password validate
    state.password = state.password.trim();
    var mediumRegexPassword = new RegExp("^(?=.{8,})");

    if (mediumRegexPassword.test(state.password) !== true) {
      setValidatePass("has-danger");
      setError("Password must contain min 8 caracters!");
      return;
    }
    setValidatePass("has-success");
    //Check if password match
    if (state.password !== state.repassword) {
      setValidateRePass("has-danger");
      setError("Password does not match!");
      return;
    }
    setValidateRePass("has-success");
    //Check if email already exist
    fetch(defaultConfig.endpoint + "/profile/checkEmail?email=" + state.email)
      .then((res) => {
        if (res.status !== 200) {
          setValidateEmail("has-danger");
          throw new Error("Email already exists!");
        }

        return fetch(defaultConfig.endpoint + "/auth/signup", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: props.id,
            email: state.email,
            password: state.password,
            gender: selectedOption,
          }),
        });
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Creating or editing a post failed!");
        }
        return res.json();
      })
      .then((resData) => {
        props.setLocalStorage(resData.token, resData.id);
        fetch(defaultConfig.endpoint + "/auth/fillData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: props.match.params.id,
            email: state.email,
          }),
        })
          .then((res) => {
            if (res.status !== 200) {
              throw new Error("Creating or editing a post failed!");
            }
            props.setRefresh(!props.refresh);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        if (err.message === "Failed to fetch")
          err.message = "Techical problems with server, please trt later!";
        setError(err.message);
      });
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, []);
  return (
    <>
      <div className="page-headerReg paddingReg" style={{}}>
        <div className="container registration">
          <div className="card-5">
            <h3 className="titleRegistration">Registration</h3>
            <br />
            <form className="register-form">
              {error ? <div style={{ color: "#dc3545" }}> {error} </div> : null}

              <div className="row m-b-55-20">
                <div className="col-md-3">
                  <div className="form-name">Email</div>
                </div>
                <div className="col-md-9">
                  <div className="form-value">
                    <Input
                      type="email"
                      name="email"
                      onChange={handleOnChange}
                      valid={validateEmail === "has-success"}
                      invalid={validateEmail === "has-danger"}
                    />
                  </div>
                </div>
              </div>

              <div className="row m-b-55-20">
                <div className="col-md-3">
                  <div className="form-name">Password</div>
                </div>

                <div className="col-md-9">
                  <div className="form-value">
                    <div className="row row-space">
                      <div className="col-md-6">
                        <div className="input-group-desc">
                          <Input
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            valid={validatePass === "has-success"}
                            invalid={validatePass === "has-danger"}
                          />
                          <label className="label--desc">password</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group-desc">
                          <Input
                            type="password"
                            name="repassword"
                            onChange={handleOnChange}
                            valid={validateRePass === "has-success"}
                            invalid={validateRePass === "has-danger"}
                          />
                          <label className="label--desc">repeat password</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-b-55-20">
                <div className="col-md-3">
                  <div className="form-name">Gender</div>
                </div>
                <div className="col-md-9">
                  <div className="form-value">
                    <div className="input-group">
                      <label className="containerCheck">
                        <input
                          type="radio"
                          value="female"
                          checked={selectedOption === "female"}
                          onChange={handleOptionChange}
                        />
                        Female
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerCheck">
                        <input
                          type="radio"
                          value="male"
                          checked={selectedOption === "male"}
                          onChange={handleOptionChange}
                        />
                        Male
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m-b-10">
                <Button
                  block
                  className="form-submit"
                  color="danger"
                  onClick={createNewProfile}
                >
                  Create account
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(RegisterPage);
