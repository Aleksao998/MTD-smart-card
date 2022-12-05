import React from "react";
import { Button } from "reactstrap";
const FormTab1 = (props) => {
  return (
    <div className="centerTabs">
      <ul className="multiTabFormUl">
        <li className="multiTabFormLi">1</li>
        <li className="multiTabFormLi active">2</li>
        <li className="multiTabFormLi">3</li>
      </ul>
      <p>Fill only fields you want to show on your profile</p>
      <div className="row">
        <div className="col-md-6">
          <table className="fillDataTableTab2A">
            <tbody>
              <tr>
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
                    className="fillDataInput"
                    value={props.state.twitter}
                    onChange={props.handleOnChange}
                  ></input>
                </td>
              </tr>

              <tr>
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
                    className="fillDataInput"
                    name="linkedin"
                    type="text"
                    value={props.state.linkedin}
                    onChange={props.handleOnChange}
                  ></input>
                </td>
              </tr>

              <tr>
                <td className="tablePadding">
                  <div className="social-icons icon-circle list-unstyled list-inline">
                    <i className="fab fa-facebook-f"></i>
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
                  <p className="contactIconTitle">Facebook</p>
                  <input
                    className="fillDataInput"
                    name="facebook"
                    type="text"
                    value={props.state.facebook}
                    onChange={props.handleOnChange}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="fillDataTableTab2B">
            <tbody>
              <tr>
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
                    className="fillDataInput"
                    name="snapchat"
                    type="text"
                    value={props.state.snapchat}
                    onChange={props.handleOnChange}
                  ></input>
                </td>
              </tr>

              <tr>
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
                    className="fillDataInput"
                    name="youtube"
                    type="text"
                    value={props.state.youtube}
                    onChange={props.handleOnChange}
                  ></input>
                </td>
              </tr>

              <tr>
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
                  <p className="contactIconTitle">Instagram</p>
                  <input
                    className="fillDataInput"
                    name="instagram"
                    type="text"
                    value={props.state.instagram}
                    onChange={props.handleOnChange}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Button
        className="btn-round btnFillDataMargin"
        style={{ marginRight: "10px" }}
        color="primary"
        href="#pablo"
        onClick={(e) => {
          e.preventDefault();
          props.prevTab();
        }}
      >
        Back
      </Button>
      <Button
        className="btn-round btnFillDataMargin"
        color="primary"
        href="#pablo"
        onClick={(e) => {
          e.preventDefault();
          props.nextTabs();
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default FormTab1;
