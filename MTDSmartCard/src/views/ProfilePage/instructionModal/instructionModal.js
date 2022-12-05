import React from "react";
import Modal from "react-modal";
import {Row, Col, Input, Label, Button} from "reactstrap"

//Modal Setting
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    minheight: "450px",
    transform: "translate(-50%, -50%)",
  },
};

const customStylesAvatar = {};
Modal.setAppElement(document.getElementById("root"));

const InstractionModal = (props) => {
 


  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={props.afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLiveLabel">
        Instructions
      </h5>
      <button
        aria-label="Close"
        className="close"
        data-dismiss="modal"
        type="button"
        onClick={() => props.closeModal()}
      >
      <span aria-hidden={true}>×</span>
    </button>
    </div>
    <div className="modal-body">
      <p>1. To upload image click on image or on upload image button and follow easy steps</p>
      <p style={{display:"inline"}}>2. Only fields where you enabled </p>
        <Input
          type="checkbox"
          checked="true"
          style={{width: "20%", marginLeft:"5px"}}
        />
        <span className="form-check-sign">
        <span className="check"></span>
        </span>
      <p>will be shown on profile. And only those will we transfer to contact on downalod cotnact button </p>
      <p>3. Clicking on <span style={{backgroundColor: "#aaa7a4",color: "white",paddingLeft: "3px", marginRight:"3px"}}> ? </span>  next to icon open popup with instructions for that field</p>
    </div>
    <div className="modal-footer">

            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              onClick={() => props.closeModal()}
            >
              Close
            </Button>
          </div>
    </Modal>
  );
};

export default InstractionModal;
