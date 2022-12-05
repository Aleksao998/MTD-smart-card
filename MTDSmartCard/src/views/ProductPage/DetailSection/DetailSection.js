import React from "react";
import logo from "./about-img.jpg";

const DetailSection = () => (
  <section className="home-about-area">
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 no-padding home-about-left">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        <div className="col-lg-6 no-padding home-about-right">
          <h1>
            Globally Connected <br />
            by Large Network
          </h1>
          <p>
            <span>We are here to listen from you deliver exellence</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor.
          </p>
          <a className="text-uppercase primary-btn" href="#">
            get details
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default DetailSection;
