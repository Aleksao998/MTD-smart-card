import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import Carousel from "./carousel";
const BuyProduct = (props) => (
  <div className="section text-center" style={{ padding: "20px" }}>
    <Row>
      <Carousel />
    </Row>
    <Row>
      <Col className="ml-auto mr-auto" md="8" style={{ marginTop: "15px" }}>
        <h3 style={{ color: "#669db3ff", fontWeight: "500" }}>
          Only business card you will ever need!
        </h3>
        <br />
      </Col>
    </Row>
    <Row>
      <Col className="ml-auto mr-auto" md="8" style={{ marginTop: "15px" }}>
        <p>
          Instantly share your social networks, contact information with a simple tap. Best of all, the
          other person doesn’t need the any app to receive your
          information or add you to their contacts!
        </p>
      </Col>
    </Row>
    <Row style={{ marginTop: "15px" }}>
      <Col>
        <Button
          onClick={() => {
            props.history.push("/checkout");
          }}
          className="btn-round btn-info mr-1"
          color="primary"
          target="_blank"
          outline
        >
          <i className="fa fa-play" />
          Order Now
        </Button>
      </Col>
    </Row>
  </div>
);

export default BuyProduct;
