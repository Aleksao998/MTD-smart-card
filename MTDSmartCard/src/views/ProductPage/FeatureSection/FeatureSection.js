import React from "react";
import logo from "../card1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faInfinity,
  faCubes,
  faShieldAlt,
  faMicrochip,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const FeatureSection = () => (
  <section id="features-4" className="section features-4-section m-t-0P ">
    <div className="container">
      <div className="row">
        <div className="center">
          <div className="features-phone noPadding">
            <img src={logo} className="productImage" alt="..." />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-2 ">
          <div className="col-feature" style={{ textAlign: "center" }}>
            <div className="icon">
              <FontAwesomeIcon icon={faExchangeAlt} />
            </div>
            <div className="content">
              <h5>Instant Contact Tranfer</h5>
            </div>
          </div>
        </div>

        <div className="col-4 col-md-2 ">
          <div className="col-feature" style={{ textAlign: "center" }}>
            <div className="icon">
              <FontAwesomeIcon icon={faInfinity} />
            </div>
            <div className="content">
              <h5>Unlimited Taps</h5>
            </div>
          </div>
        </div>

        <div className="col-4 col-md-2 ">
          <div className="col-feature" style={{ textAlign: "center" }}>
            <div className="icon">
              <FontAwesomeIcon icon={faCubes} />
            </div>
            <div className="content">
              <h5>ALL-In-One</h5>
            </div>
          </div>
        </div>

        <div className="col-4 col-md-2 ">
          <div className="col-feature" style={{ textAlign: "center" }}>
            <div className="icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <div className="content">
              <h5>Encryption</h5>
            </div>
          </div>
        </div>

        <div className="col-4 col-md-2 ">
          <div className="col-feature" style={{ textAlign: "center" }}>
            <div className="icon">
              <FontAwesomeIcon icon={faMicrochip} />
            </div>
            <div className="content">
              <h5>Modern Technology</h5>
            </div>
          </div>
        </div>

        <div className="col-4 col-md-2 ">
          <div className="col-feature" style={{ textAlign: "center" }}>
            <div className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="content">
              <h5>Beautiful Design</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
