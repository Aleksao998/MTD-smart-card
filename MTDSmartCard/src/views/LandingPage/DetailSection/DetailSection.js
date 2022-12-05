import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import uputstvo1 from "../../../assets/img/landingPage/testEditPage.png";
import uputstvo3 from "../../../assets/img/landingPage/testUputtsvo3.jpg";
import uputstvo2 from "../../../assets/img/landingPage/testUputstvo2.jpg";
const DetailSection = (props) => (
  <div className="section text-center">
    <div className="container">
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="title">Share Your Contact Details With a TAP</h2>
          <h5 className="description"></h5>
          <br />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md="4">
          <div className="info">
            <img src={uputstvo1} />
            <div className="description">
              <h4 style={{ color: "#669db3ff", fontWeight: "500" }}>
                Configurate profile
              </h4>
              <p className="description">
                After creating the profile, you decide which information you
                would like to be displayed (email, mobile numbers, social
                networks, company infomration...)
              </p>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="info">
            <img src={uputstvo2} />
            <div className="description">
              <h4 style={{ color: "#669db3ff", fontWeight: "500" }}>
                Touch & Connect
              </h4>
              <p>
                By simply scanning the QR code with any phone camera or taping
                the card with NFC enabled phones, you can exchange desired
                information.
              </p>
            </div>
          </div>
        </Col>
        <Col md="4" style={{ marginTop: "60px" }}>
          <div className="info">
            <img src={uputstvo3} />
            <div className="description">
              <h4 style={{ color: "#669db3ff", fontWeight: "500" }}>
                View profile
              </h4>
              <p>
                Once the profile is open on the phone browser, you can view the
                desired data and download contact directly to your phone
                clicking on “Save Contact” button.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default withRouter(DetailSection);
