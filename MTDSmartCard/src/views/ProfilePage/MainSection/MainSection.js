import React from "react";
// reactstrap components
import { Button, Row, Col } from "reactstrap";

const MainSection = (props) => (
  <div>
    <div className="owner">
      <div className="avatar">
        <img
          alt="..."
          className="img-circle img-no-padding img-responsive"
          src={props.imageUrl}
        />
      </div>
      <div className="name">
        <h4 className="title">
          {props.state.firstName} {props.state.lastName}
        </h4>
        <h6 className="description">
          {" "}
          {props.state.companyName} {props.state.jobTitle}{" "}
        </h6>
      </div>
    </div>
    <Row>
      <Col className="ml-auto mr-auto text-center" md="6">
        <Button
          className="btn-round"
          color="default"
          outline
          onClick={props.downloadContact}
        >
          <i className="fa fa-save" /> Save Contact
        </Button>
      </Col>
    </Row>
  </div>
);

export default MainSection;
