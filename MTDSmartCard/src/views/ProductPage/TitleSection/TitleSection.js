import React from "react";
import { Button } from "reactstrap";

const TitleSection = () => (
  <div className="container m-t-100P">
    <div className="row">
      <div className="center">
        <p className="productTitle">Smart Card</p>
        <p className="productText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus, luctus
          nec ulamcorper mattis
        </p>
        <p className="productText">
          , Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus
        </p>
        <br></br>
        <p className="productPrice">-2500rsd-</p>
        <div>
          <Button className="btn-round btn-info" color="primary" outline>
            <i className="fa fa-shopping-cart "></i>
            Order Now
          </Button>
          <Button
            className="btn-round btn-info"
            color="primary"
            style={{ marginLeft: "10px" }}
            outline
          >
            How it works?
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default TitleSection;
