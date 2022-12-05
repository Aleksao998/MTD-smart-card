import React from "react";

// reactstrap components

function ContactEditSection(props) {
  return (
    <div className="service_area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-md-4">
            <div
              className="single_service text-center wow fadeInLeft"
              data-wow-duration="1.2s"
              data-wow-delay=".4s"
            >
              <div className="center">
                <h3 className="contactTitle"> Contact info</h3>
              </div>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr className="contactRow">
                    <td className="tablePadding">
                      <div className="social-icons icon-circle list-unstyled list-inline">
                        <i className="fas fa-mobile"></i>
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
                      <p className="contactIconTitle">Mobile phone:</p>
                      <div>
                        <input
                          name="mobileNumber"
                          type="tel"
                          value={props.state.mobileNumber}
                          onChange={props.handleOnChange}
                        ></input>
                      </div>
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
                      <p className="contactIconTitle">Home phone:</p>
                      <input
                        name="homeNumber"
                        type="tel"
                        value={props.state.homeNumber}
                        onChange={props.handleOnChange}
                        placeholder="e.g. 113808624"
                      ></input>
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
                      <p className="contactIconTitle">Email</p>
                      <input
                        name="email"
                        type="text"
                        value={props.state.email}
                        onChange={props.handleOnChange}
                        placeholder="e.g. aleksaopacic@gmail.com"
                      ></input>
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
                      <p className="contactIconTitle">Work Email</p>
                      <input
                        name="workEmail"
                        type="text"
                        value={props.state.workEmail}
                        onChange={props.handleOnChange}
                        placeholder="e.g. opacicaleksa@gmail.com"
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-xl-4 col-md-4">
            <div
              className="single_service text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="center">
                <h3 className="contactTitle">Social Network</h3>
              </div>
              <table style={{ width: "100%" }}>
                <tbody>
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
                      <p className="contactIconTitle">Twitter:</p>
                      <input
                        name="twitter"
                        type="text"
                        value={props.state.twitter}
                        onChange={props.handleOnChange}
                        placeholder="e.g. AleksaOpacic"
                      ></input>
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
                      <p className="contactIconTitle">LinkedIn:</p>
                      <input
                        name="instagram"
                        type="text"
                        value={props.state.instagram}
                        onChange={props.handleOnChange}
                      ></input>
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
                      <p className="contactIconTitle">LinkedIn:</p>
                      <input
                        name="linkedin"
                        type="text"
                        value={props.state.linkedin}
                        onChange={props.handleOnChange}
                        placeholder="e.g. AleksaO"
                      ></input>
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
                      <p className="contactIconTitle">Facebook</p>
                      <input
                        name="facebook"
                        type="text"
                        value={props.state.facebook}
                        onChange={props.handleOnChange}
                        placeholder="e.g. aleksaopacic"
                      ></input>
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
                      <p className="contactIconTitle">Snapchat</p>
                      <input
                        name="snapchat"
                        type="text"
                        value={props.state.snapchat}
                        onChange={props.handleOnChange}
                        placeholder="e.g. AleksaO"
                      ></input>
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
                      <p className="contactIconTitle">Youtube</p>
                      <input
                        name="youtube"
                        type="text"
                        value={props.state.youtube}
                        onChange={props.handleOnChange}
                        placeholder="e.g. AleksaO"
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-xl-4 col-md-4">
            <div
              className="single_service text-center wow fadeInRight"
              data-wow-duration="1.2s"
              data-wow-delay=".4s"
            >
              <div className="center">
                <h3 className="contactTitle">
                  Direct messages <br></br> & <br></br> personal info
                </h3>
              </div>
              <table style={{ width: "100%" }}>
                <tbody>
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
                      <p className="contactIconTitle">WhatsApp:</p>
                      <input
                        name="whatsapp"
                        type="tel"
                        value={props.state.whatsapp}
                        onChange={props.handleOnChange}
                        placeholder="e.g. +381621203040"
                      ></input>
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
                      <p className="contactIconTitle">Viber:</p>
                      <input
                        name="viber"
                        type="tel"
                        value={props.state.viber}
                        onChange={props.handleOnChange}
                        placeholder="e.g. +381621203040"
                      ></input>
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
                      <p className="contactIconTitle">Adress:</p>
                      <input
                        name="address"
                        type="text"
                        value={props.state.address}
                        onChange={props.handleOnChange}
                        placeholder="e.g. Hektoroviceva 24,Beograd"
                      ></input>
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
                      <p className="contactIconTitle">BirthDay</p>
                      <input
                        name="birthday"
                        type="text"
                        value={props.state.birthday}
                        onChange={props.handleOnChange}
                        placeholder="e.g. 30.07.1998"
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactEditSection;
