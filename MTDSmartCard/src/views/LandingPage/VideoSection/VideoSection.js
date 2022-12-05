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
import ReactPlayer from "react-player";
const VideoSection = () => (
  <div className="section section-dark text-center" style={{ padding: "20px" }}>
    <Container>
      <h2 className="title">How it works?</h2>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=-fjmSE9Ez6w"
          width="100%"
          height="100%"
        />
      </div>
    </Container>
  </div>
);

export default VideoSection;
