import React from "react";
import Modal from "react-modal";

import { Col, Row, Button } from "reactstrap";
import logo from "./BuyCardImage.jpeg";
//Modal Setting
const customStyles = {
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
  },
};

Modal.setAppElement(document.getElementById("root"));

const BuyModal = (props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={props.afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Row>
        <div style={{ width: "100%", paddingRight: "14px", marginTop: "-2px" }}>
          <Button
            close
            className="buyBannerClosingButton"
            onClick={() => {
              props.closeModal();
            }}
          />
        </div>
      </Row>

      <Row style={{ marginTop: "50px" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src={logo}
            style={{ maxWidth: "80%", borderRadius: "8%" }}
            alt=""
          />
        </div>
      </Row>

      <Row style={{ marginTop: "5px" }}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2>Become a member of the MTD SmartCard family</h2>
          <p>We deliver to your address</p>
        </div>
      </Row>

      <Row style={{ marginTop: "15px" }}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <Button
            color="primary"
            size="lg"
            onClick={() => {
              props.closeModal();
              props.history.push("/checkout");
            }}
          >
            Order Now
          </Button>
        </div>
      </Row>
    </Modal>
  );
};

export default BuyModal;
