import React, { useState } from "react";
import {
  Input,
  Label,
  FormGroup,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  InputGroup,
  InputGroupAddon,
  Row,
  Col
} from "reactstrap";
import InstructionModal from "../instructionModal/instructionModal"
// reactstrap components

function ContactEditSection(props) {
  document.documentElement.classList.remove("nav-open");
  const [popoverTwitter, setPopoverTwitter] = useState(false);
  const [popoverInstagram, setPopoverInstagram] = useState(false);
  const [popoverLinkein, setPopoverLinkein] = useState(false);
  const [popoverFacebook, setPopoverFacebook] = useState(false);
  const [popoverSnapchat, setPopoverSnapchat] = useState(false);
  const [popoverYoutube, setPopoverYoutube] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const afterOpenModal = () => {};
  const toggle = (value, set) => set(!value);
  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, []);

  return (
    <div className="service_area">
      <div className="container-fluid">
      <InstructionModal
      modalIsOpen={modalIsOpen}
      afterOpenModal={afterOpenModal}
      closeModal={closeModal}
    />
    <Row>
    <Col style={{textAlign:"center", marginBottom:"10px"}}>
    <Button color="link" onClick={() => openModal()}>Open instructions</Button>
    </Col>
    </Row>
        <div className="row">
          <div className="col-xl-4 col-md-4">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-mobile"></i>
                    </div>
                  </td>
                  <td className="tablePadding">
                    <div>
                      <Input
                        name="mobileNumber"
                        type="tel"
                        value={props.state.mobileNumber}
                        onChange={props.handleOnChange}
                      ></Input>
                    </div>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.mobilePhone}
                          onClick={props.handleOnChangeCheckBox}
                          name="mobilePhone"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-phone"></i>
                    </div>
                  </td>

                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="homeNumber"
                      type="tel"
                      value={props.state.homeNumber}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.homePhone}
                          onClick={props.handleOnChangeCheckBox}
                          name="homePhone"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="email"
                      type="text"
                      value={props.state.email}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.email}
                          onClick={props.handleOnChangeCheckBox}
                          name="email"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-envelope-open"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="workEmail"
                      type="text"
                      value={props.state.workEmail}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.workEmail}
                          onClick={props.handleOnChangeCheckBox}
                          name="workEmail"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-twitter"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button
                          id="PopoverTwitter"
                          type="button"
                          className="popoverButton"
                        >
                          ?
                        </Button>
                      </InputGroupAddon>
                      <Input
                        name="twitter"
                        type="text"
                        value={props.state.twitter[0]}
                        onChange={props.handleOnChangeSocial}
                      ></Input>
                    </InputGroup>
                    <Popover
                      placement="bottom"
                      isOpen={popoverTwitter}
                      target="PopoverTwitter"
                      toggle={() => {
                        toggle(popoverTwitter, setPopoverTwitter);
                      }}
                    >
                      <PopoverHeader>Twitter</PopoverHeader>
                      <PopoverBody>
                        You can use your twitter username
                      </PopoverBody>
                    </Popover>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.twitter}
                          onClick={props.handleOnChangeCheckBox}
                          name="twitter"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button
                          id="PopoverInstagram"
                          type="button"
                          className="popoverButton"
                        >
                          ?
                        </Button>
                      </InputGroupAddon>
                      <Input
                        name="instagram"
                        type="text"
                        value={props.state.instagram[0]}
                        onChange={props.handleOnChangeSocial}
                      ></Input>
                      <Popover
                        placement="bottom"
                        isOpen={popoverInstagram}
                        target="PopoverInstagram"
                        toggle={() => {
                          toggle(popoverInstagram, setPopoverInstagram);
                        }}
                      >
                        <PopoverHeader>Instagram</PopoverHeader>
                        <PopoverBody>
                          You can use your instagram username 
                        </PopoverBody>
                      </Popover>
                    </InputGroup>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.instagram}
                          onClick={props.handleOnChangeCheckBox}
                          name="instagram"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-linkedin-in"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button
                          id="PopoverLinkedin"
                          type="button"
                          className="popoverButton"
                        >
                          ?
                        </Button>
                      </InputGroupAddon>
                      <Input
                        name="linkedin"
                        type="text"
                        value={props.state.linkedin[1]}
                        onChange={props.handleOnChangeSocial}
                      ></Input>
                      <Popover
                        placement="bottom"
                        isOpen={popoverLinkein}
                        target="PopoverLinkedin"
                        toggle={() => {
                          toggle(popoverLinkein, setPopoverLinkein);
                        }}
                      >
                        <PopoverHeader>Linkedin</PopoverHeader>
                        <PopoverBody>
                          You must use link to Linkedin profile
                        </PopoverBody>
                      </Popover>
                    </InputGroup>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.linkedIn}
                          onClick={props.handleOnChangeCheckBox}
                          name="linkedIn"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "3!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button
                          id="PopoverFacebook"
                          type="button"
                          className="popoverButton"
                        >
                          ?
                        </Button>
                      </InputGroupAddon>
                      <Input
                        name="facebook"
                        type="text"
                        value={props.state.facebook[1]}
                        onChange={props.handleOnChangeSocial}
                      ></Input>
                      <Popover
                        placement="bottom"
                        isOpen={popoverFacebook}
                        target="PopoverFacebook"
                        toggle={() => {
                          toggle(popoverFacebook, setPopoverFacebook);
                        }}
                      >
                        <PopoverHeader>Facebook</PopoverHeader>
                        <PopoverBody>
                          You must use link to Facebook profile
                        </PopoverBody>
                      </Popover>
                    </InputGroup>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.facebook}
                          onClick={props.handleOnChangeCheckBox}
                          name="facebook"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-snapchat-ghost"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button
                          id="PopoverSnapchat"
                          type="button"
                          className="popoverButton"
                        >
                          ?
                        </Button>
                      </InputGroupAddon>
                      <Input
                        name="snapchat"
                        type="text"
                        value={props.state.snapchat[0]}
                        onChange={props.handleOnChangeSocial}
                      ></Input>
                      <Popover
                        placement="bottom"
                        isOpen={popoverSnapchat}
                        target="PopoverSnapchat"
                        toggle={() => {
                          toggle(popoverSnapchat, setPopoverSnapchat);
                        }}
                      >
                        <PopoverHeader>Snapchat</PopoverHeader>
                        <PopoverBody>
                          You can use your snapchat username
                        </PopoverBody>
                      </Popover>
                    </InputGroup>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.snapchat}
                          onClick={props.handleOnChangeCheckBox}
                          name="snapchat"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-youtube"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button
                          id="PopoverYoutube"
                          type="button"
                          className="popoverButton"
                        >
                          ?
                        </Button>
                      </InputGroupAddon>
                      <Input
                        name="youtube"
                        type="text"
                        value={props.state.youtube[1]}
                        onChange={props.handleOnChangeSocial}
                      ></Input>
                      <Popover
                        placement="bottom"
                        isOpen={popoverYoutube}
                        target="PopoverYoutube"
                        toggle={() => {
                          toggle(popoverYoutube, setPopoverYoutube);
                        }}
                      >
                        <PopoverHeader>Youtube</PopoverHeader>
                        <PopoverBody>
                          You must use link to youtube profile
                        </PopoverBody>
                      </Popover>
                    </InputGroup>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.youtube}
                          onClick={props.handleOnChangeCheckBox}
                          name="youtube"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="whatsapp"
                      type="tel"
                      value={props.state.whatsapp}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.whatsapp}
                          onClick={props.handleOnChangeCheckBox}
                          name="whatsapp"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-viber "></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="viber"
                      type="tel"
                      value={props.state.viber}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.viber}
                          onClick={props.handleOnChangeCheckBox}
                          name="viber"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-home"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="address"
                      type="text"
                      value={props.state.address}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.adress}
                          onClick={props.handleOnChangeCheckBox}
                          name="adress"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-birthday-cake"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="birthday"
                      type="text"
                      value={props.state.birthday}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.birthday}
                          onClick={props.handleOnChangeCheckBox}
                          name="birthday"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ textAlign: "center" }}>
            <Button onClick={props.editProfile} color="success">
              Sacuvaj
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactEditSection;
