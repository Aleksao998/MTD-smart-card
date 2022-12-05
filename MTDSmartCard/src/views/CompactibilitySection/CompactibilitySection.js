import React from "react";
import {Col, Button} from "reactstrap"
const CompatibilitySection = (props) => (
  <section id="video" className="section video-section text-center" style={{marginTop:"60px"}}>
    <h2 className="title" style={{ color: "white" }}>
      NFC Supported Devices
    </h2>
    <p className="NFCAndOther">
      This is the list of all phones that support nfc scan. All feature phones
      not on the list will have this options. For other phones scan QR code
      using camera
    </p>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">Iphone</h4>
          iPhone XR, XS, XS Max, iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max
        </div>
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">Google</h4>
          Pixel, Pixel XL, Pixel 2, Pixel 2XL, Pixel 3, Pixel 3XL, Pixel 3A,
          Pixel 3aXL, Pixel 4
        </div>
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">Samsung</h4>
          Note 8, 9, 10, 10+
        </div>
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">Galaxy</h4>
          Galaxy SIII, S4, S5, S6, S6 Edge, S6 Edge+, S7, S7Edge, S8, S8+, S9,
          S9+, S10, S10 5G, S10+
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">HTC</h4>
          One M9, Desire 10 Pro, Exodus 1, U11/Life/+, Desire 12/12+, U11 Eyes,
          U12 Life, U12+, U19e, 19+
        </div>

        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">Huawei</h4>
          P10, P10 Plus, P10 Lite, P20, P20 Pro, P20 Lite, P30, P30 Pro, P30
          Lite
        </div>
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">LG</h4>
          G3, Nexus 5X, V10, G4, K10, V20, G5, G6, V30, V35 ThinQ, Q Stylus, Q
          Stylo 4, V40 ThinQ, V50 ThinQ 5G, Q8, Q7, G7 ThinQ, G8, G8s ThinQ, Q9
        </div>
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">Xiaomi</h4>
          Mi Mix, Mi Mix2, Mi Mix 2S, Mi Mix 3, Mi5, Mi5s, Mi5 Plus, Mi6/X, Mi6,
          Mi8, Mi8 Lite, Mi8 Pro, Mi9, Mi9 SE
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">Nokia</h4>
          3, 5, 6, 8, 8.1, 6.1, 8 Sirocco, 7 Plus, 5.1, 9 PureView
        </div>
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">OnePlus</h4>
          One, 3, 3T, 5, 5T, 6, 6T, 7, 7 Pro, 7 Pro 5G
        </div>
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">Motorola</h4>
          Moto P50, Moto X4, Moto Z3, Moto Z3 Play
        </div>
        <div className="col-md-3">
          <h4 className="NfcPhoneTitle">Sony</h4>
          Xperia XZ1/Compact, Xperia 1, 10/Plus, Xperia XA1/Ultra/Plus, Xperia
          XZ2/Compact/Premium, Xperia XA2/Ultra/Plus, Xperia XZ3
        </div>
      </div>
      <div className="row" style={{marginTop:"20px"}}>
      <Col>
        <Button color="white-color" onClick={()=>{props.history.push("checkout")}}>Order Now</Button>
      </Col>
      </div>
    </div>
  </section>
);

export default CompatibilitySection;