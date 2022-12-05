import React, { useState } from "react";
import { useAlert } from "react-alert";
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
var defaultConfig = require("../../../default");
const ContactSection = () => {
  const alert = useAlert();
  const [state, setState] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [error, setError] = useState("");
  const submit = () => {
    console.log(state);
    if (state.name === "" || state.name === "" || state.msg === "") {
      setError("Please fill all fields!");
      return;
    }
    fetch(defaultConfig.endpoint + "/contact/contactForm", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Techical error please try later!");
        }
        alert.success("Message sent!");
      })
      .catch((err) => {
        setError("Techical error please try later!");
      });
    setState({
      name: "",
      email: "",
      msg: "",
    });
    setError("");
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="section landing-section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Have any questions?</h2>
            <Form className="contact-form">
              <Row>
                <h4 className="errorMsg">{error}</h4>
              </Row>
              <Row>
                <Col md="6">
                  <label>Name</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      type="text"
                      onChange={handleOnChange}
                      name="name"
                      value={state.name}
                    />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label>Email</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onChange={handleOnChange}
                      name="email"
                      value={state.email}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <label>Message</label>
              <Input
                onChange={handleOnChange}
                name="msg"
                placeholder="Tell us your thoughts and feelings..."
                type="textarea"
                rows="4"
                value={state.msg}
              />
              <Row>
                <Col className="ml-auto mr-auto" md="4">
                  <Button
                    className="btn-fill"
                    color="primary"
                    size="lg"
                    onClick={submit}
                  >
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactSection;
