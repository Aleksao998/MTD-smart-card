import React from "react";

const UniqueSection = () => (
  <section className="service-area section-gap" id="service">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 pb-40 header-text">
          <h1>Some Features that Made us Unique</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-service">
            <h4 className="uniqueTitle">
              <span className="lnr lnr-user"></span>Instant Contact Transfer
            </h4>
            <p>
              With one tap of the card or QR code scan your contact ditails will
              be displayed to the designated phone with the option to save.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service">
            <h4 className="uniqueTitle">
              <span className="lnr lnr-license"></span>Unlimited Taps
            </h4>
            <p>Each MTD Smart Card has a unlimited life span.</p>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service">
            <h4 className="uniqueTitle">
              <span className="lnr lnr-phone"></span>ALL-In-One
            </h4>
            <p>
              Transfer all of your social networks & desired information with
              just one tap or by scanning the QR code.
            </p>
            <br></br>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service">
            <h4 className="uniqueTitle">
              <span className="lnr lnr-rocket"></span>Encryption
            </h4>
            <p>
              Only single authorized profile will have the ability to alter the
              information. Youur data will be protected in every way possible.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service">
            <h4 className="uniqueTitle">
              <span className="lnr lnr-diamond"></span>Modern Technology
            </h4>
            <p>
              MTD Smart Card uses Near Field Communication (NFC) Technology.
            </p>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service">
            <h4 className="uniqueTitle">
              <span className="lnr lnr-bubble"></span>Beautiful Design
            </h4>
            <p>
              MTD Smart Card is made with the laser‑cut stainless steel, and
              finally finished with the scratch proof skin.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default UniqueSection;
