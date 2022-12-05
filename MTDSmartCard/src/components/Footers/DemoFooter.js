import React from "react";

// reactstrap components
import { Row, Container, Col, Button } from "reactstrap";

function DemoFooter(props) {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        {localStorage.getItem("token") == null && props.onPage === true ? (
          <Row>
            <Col>
              <div style={{ textAlign: "center" }}>
                <Button
                  outline
                  color="primary"
                  onClick={() => {
                    props.history.push("/login-page");
                  }}
                >
                  Login
                </Button>
              </div>
            </Col>
          </Row>
        ) : null}

        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made by Modern Technology
              Development
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
