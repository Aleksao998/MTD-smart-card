import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import { UncontrolledCollapse, CardBody, Card } from "reactstrap";



const CompatibilitySection = (props) => {

  return (
    <section id="video" className="section video-section text-center">
      <h2 className="title" style={{ color: "white" }}>
        Supported Devices
      </h2>
      <p className="NFCAndOther">
        Does your smartphone support MTDSmartCard? <br/>
        Please check the list below to determine if your device is eligible for these experiences. 
      </p>
      <div className="container">
        <div className="row" style={{ marginTop: "15px" }}>
          <Col>
          <Button color="primary" className="collapseButton" id="qrCodeEnabled">
          QrCode enabled
          </Button>
        <Button color="primary" id="nfcEnabled">
          NFC enabled
        </Button>
        <UncontrolledCollapse toggler="#qrCodeEnabled">
          <Card>
            <CardBody style={{textAlign:"left"}}>
              <p style={{marginBottom:"0px"}}>QrCode:</p>
              All phones with camera access and internet support QrCode scan
              <p style={{marginBottom:"0px", marginTop:"4px"}}>Instruction:</p>
              Open camera on your phone and scan qrCode from card
            </CardBody>
          </Card>
        </UncontrolledCollapse>
        <UncontrolledCollapse toggler="#nfcEnabled">
        <Card>
          <CardBody style={{textAlign:"left"}}>
          <p style={{marginBottom:"0px"}}>Nfc:</p>
          List of all nfc enabled phones: <Button className="btn-link" color="primary" style={{padding:"0px", margin:"0px", marginLeft:"2px"}} onClick={()=>{props.history.push('compactibilitySection')}}>Full list</Button>
          <p style={{marginBottom:"0px", marginTop:"4px"}}>Instruction:</p>
          Place card near your phone
          </CardBody>
        </Card>
      </UncontrolledCollapse>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;
