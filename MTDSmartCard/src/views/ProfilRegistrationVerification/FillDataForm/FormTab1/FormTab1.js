import React from "react";
import { Button } from "reactstrap";
const FormTab1 = (props) => {
  return (
    <div className="centerTabs">
      <ul className="multiTabFormUl">
        <li className="multiTabFormLi active">1</li>
        <li className="multiTabFormLi">2</li>
        <li className="multiTabFormLi">3</li>
      </ul>
      <p>Fill only fields you want to show on your profile</p>
      <table className="fillDataTable">
        <tbody>
          <tr>
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
              <input
                className="fillDataInput"
                name="mobileNumber"
                type="tel"
                value={props.state.mobileNumber}
                onChange={props.handleOnChange}
              ></input>
            </td>
          </tr>

          <tr>
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
                className="fillDataInput"
                name="homeNumber"
                type="tel"
                value={props.state.homeNumber}
                onChange={props.handleOnChange}
              ></input>
            </td>
          </tr>

          <tr>
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
                className="fillDataInput"
                name="email"
                type="text"
                value={props.state.email}
                onChange={props.handleOnChange}
              ></input>
            </td>
          </tr>

          <tr>
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
                className="fillDataInput"
                name="workEmail"
                type="text"
                value={props.state.workEmail}
                onChange={props.handleOnChange}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
      <Button
        className="btn-round"
        style={{ marginTop: "25px" }}
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
