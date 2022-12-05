import React from "react";

// reactstrap components
import { UncontrolledCarousel } from "reactstrap";
import buyProduct1 from "../../../assets/img/landingPage/BuyProduct.jpeg";
import buyProduct2 from "../../../assets/img/landingPage/BuyProduct2.jpg";
import buyProduct3 from "../../../assets/img/landingPage/BuyProduct3.jpg";
const carouselItems = [
  {
    src: buyProduct1,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: buyProduct2,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: buyProduct3,
    altText: "Slide 3",
    caption: "",
  },
];

function Carousel() {
  return (
    <>
      <UncontrolledCarousel items={carouselItems} />
    </>
  );
}

export default Carousel;
