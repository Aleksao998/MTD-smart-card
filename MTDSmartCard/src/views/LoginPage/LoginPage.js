import React, { useState } from "react";

// reactstrap components
import { Button, Form, Input } from "reactstrap";

function LoginPage(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, [props.reload]);
  return (
    <div>
      <div className="page-headerLog" style={{}}>
        <div className="container login">
          <div className="card-5">
            <h3 className="titleRegistration">Welcome again</h3>
            <br />
            <Form className="register-form">
              {props.error ? (
                <div style={{ color: "#dc3545" }}> {props.error} </div>
              ) : null}
              <div className="row m-b-55-20">
                <div className="col-md-3">
                  <div className="form-name">Email</div>
                </div>
                <div className="col-md-9">
                  <div className="form-value">
                    <div className="input-group">
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleOnChange}
                        valid={props.validateEmail === "has-success"}
                        invalid={props.validateEmail === "has-danger"}
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m-b-55-20">
                <div className="col-md-3">
                  <div className="form-name">Password</div>
                </div>
                <div className="col-md-9">
                  <div className="form-value">
                    <div className="input-group">
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleOnChange}
                        placeholder="Password"
                        valid={props.validatePass === "has-success"}
                        invalid={props.validatePass === "has-danger"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m-b-10">
                <Button
                  block
                  className="form-submit"
                  onClick={(event) => {
                    props.login(event, state.email, state.password);
                  }}
                  color="danger"
                >
                  {props.loginButton ? (
                    <i className="fa fa-refresh fa-spin"></i>
                  ) : (
                    props.buttonText
                  )}
                </Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="footer register-footer text-center">
          <h6 style={{ marginBottom: "0px" }}>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Modern Technology Development
          </h6>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
