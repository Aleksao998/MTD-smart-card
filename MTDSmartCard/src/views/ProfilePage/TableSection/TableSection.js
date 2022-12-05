import React from "react";
import {
    Button,
    Label,
    FormGroup,
    Input,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col
  } from "reactstrap";

const TableSection = () => (
   
<div className="nav-tabs-navigation">
<div className="nav-tabs-wrapper">
  <Nav role="tablist" tabs>
    <NavItem>
      <NavLink
        className={activeTab === "1" ? "active" : ""}
        onClick={() => {
          toggle("1");
        }}
      >
        Follows
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === "2" ? "active" : ""}
        onClick={() => {
          toggle("2");
        }}
      >
        Following
      </NavLink>
    </NavItem>
  </Nav>
</div>
</div>
{/* Tab panes */}
<TabContent className="following" activeTab={activeTab}>
<TabPane tabId="1" id="follows">
  <Row>
    <Col className="ml-auto mr-auto" md="6">
      <ul className="list-unstyled follows">
        <li>
          <Row>
            <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
              />
            </Col>
            <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
              <h6>
                Flume <br />
                <small>Musical Producer</small>
              </h6>
            </Col>
            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
              <FormGroup check>
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue=""
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </li>
        <hr />
        <li>
          <Row>
            <Col className="mx-auto" lg="2" md="4" xs="4">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
              />
            </Col>
            <Col lg="7" md="4" xs="4">
              <h6>
                Banks <br />
                <small>Singer</small>
              </h6>
            </Col>
            <Col lg="3" md="4" xs="4">
              <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </li>
      </ul>
    </Col>
  </Row>
</TabPane>
<TabPane className="text-center" tabId="2" id="following">
  <h3 className="text-muted">Not following anyone yet :(</h3>
  <Button className="btn-round" color="warning">
    Find artists
  </Button>
</TabPane>
</TabContent>
);

export default TableSection;

