import React from "react";
import { withRouter } from "react-router-dom";
// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {});

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/image.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div
            className="motto text-center"
            style={{ color: "black", marginTop: "-190px" }}
          >
            <h1 style={{ fontWeight: "bold" }}>Smart Card</h1>
            <h3>The last business card you’ll ever need</h3>
            <h3></h3>
            <br />
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round btn-info mr-1"
              color="primary"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>

            <Button
              onClick={() => {
                props.history.push("/checkout");
              }}
              className="btn-round btn-info mr-1"
              color="primary"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Order Now
            </Button>
            <p>*No app required!</p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default withRouter(LandingPageHeader);
