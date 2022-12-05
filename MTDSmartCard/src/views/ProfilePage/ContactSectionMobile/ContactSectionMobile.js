import React, { useState } from "react";
// reactstrap components

const ContactSection = (props) => {
  const [reload, setReload] = useState(false);
  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, []);

  return (
    <div className="service_area" style={{ height: "auto!important" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-md-4">
            <table style={{ width: "100%" }}>
              <tbody>
                {props.showData.mobilePhone ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={"tel:+" + props.state.mobileNumber}
                            style={{ padding: "0" }}
                          >
                            <i className="fas fa-mobile"></i>
                          </a>
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
                        <a
                          href={"tel:+" + props.state.mobileNumber}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.mobileNumber}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.homePhone ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={"tel:+" + props.state.mobileNumber}
                            style={{ padding: "0" }}
                          >
                            <i className="fas fa-phone"></i>
                          </a>
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
                        <a
                          href={"tel:+" + props.state.homeNumber}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.homeNumber}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.email ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={"mailto:" + props.state.email}
                            style={{ padding: "0" }}
                          >
                            <i className="fas fa-envelope"></i>
                          </a>
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
                        <a
                          href={"mailto:" + props.state.email}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.email}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.workEmail ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={"mailto:" + props.state.workEmail}
                            style={{ padding: "0" }}
                          >
                            <i className="fas fa-envelope-open"></i>
                          </a>
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
                        <a
                          href={"mailto:" + props.state.workEmail}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.workEmail}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.twitter ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={props.state.twitter[1]}
                            style={{ padding: "0" }}
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
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
                        <a
                          href={props.state.twitter[1]}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                        {props.state.twitter[0]}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.linkedIn ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={props.state.linkedin[1]}
                            style={{ padding: "0" }}
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
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
                        <a
                          href={props.state.linkedin[1]}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          View Profile
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}
                {props.showData.instagram ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={props.state.instagram[1]}
                            style={{ padding: "0" }}
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
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
                        <p className="contactIconTitle">Instagram:</p>
                        <a
                          href={props.state.instagram[1]}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                        {props.state.instagram[0]}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.facebook ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={props.state.facebook[1]}
                            style={{ padding: "0" }}
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
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
                        <a
                          href={props.state.facebook[1]}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          View profile
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.snapchat ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={props.state.snapchat[1]}
                            style={{ padding: "0" }}
                          >
                            <i className="fab fa-snapchat-ghost"></i>
                          </a>
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
                        <a
                          href={props.state.snapchat[1]}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                        {props.state.snapchat[0]}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.youtube ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={props.state.youtube[1]}
                            style={{ padding: "0" }}
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
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
                        <a
                          href={props.state.youtube[1]}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          View profile
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.whatsapp ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={"tel:+" + props.state.whatsapp}
                            style={{ padding: "0" }}
                          >
                            <i className="fab fa-whatsapp"></i>
                          </a>
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
                        <a
                          href={"tel:+" + props.state.whatsapp}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.whatsapp}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.viber ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={"tel:+" + props.state.viber}
                            style={{ padding: "0" }}
                          >
                            <i className="fab fa-viber "></i>
                          </a>
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
                        <a
                          href={"tel:+" + props.state.viber}
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.viber}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}
                {props.showData.adress ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a
                            href={
                              "http://maps.google.com/?q=" + props.state.address
                            }
                            style={{ padding: "0" }}
                          >
                            <i className="fas fa-home"></i>
                          </a>
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
                        <a
                          href={
                            "http://maps.google.com/?q=" + props.state.address
                          }
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.address}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}

                {props.showData.birthday ? (
                  <>
                    <tr className="contactRow">
                      <td className="tablePadding">
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <a style={{ padding: "0" }}>
                            <i className="fas fa-birthday-cake"></i>
                          </a>
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
                        <a style={{ fontWeight: "500", color: "black" }}>
                          {props.state.birthday}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
