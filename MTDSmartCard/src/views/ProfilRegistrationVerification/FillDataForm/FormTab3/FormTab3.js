import React from "react";
import { Button } from "reactstrap";
const FormTab1 = (props) => {
  return (
    <div className="centerTabs">
      <ul className="multiTabFormUl">
        <li className="multiTabFormLi">1</li>
        <li className="multiTabFormLi">2</li>
        <li className="multiTabFormLi  active">3</li>
      </ul>
      <p>Fill only fields you want to show on your profile</p>
      <table className="fillDataTable">
        <tbody>
          <tr>
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
                className="fillDataInput"
                name="whatsapp"
                type="tel"
                value={props.state.whatsapp}
                onChange={props.handleOnChange}
              ></input>
            </td>
          </tr>

          <tr>
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
                className="fillDataInput"
                name="viber"
                type="tel"
                value={props.state.viber}
                onChange={props.handleOnChange}
              ></input>
            </td>
          </tr>

          <tr>
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
                className="fillDataInput"
                name="address"
                type="text"
                value={props.state.address}
                onChange={props.handleOnChange}
              ></input>
            </td>
          </tr>

          <tr>
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
                className="fillDataInput"
                name="birthday"
                type="text"
                value={props.state.birthday}
                onChange={props.handleOnChange}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
      <Button
        className="btn-round"
        style={{ marginTop: "25px", marginRight: "10px" }}
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
        className="btn-round"
        style={{ marginTop: "25px" }}
        color="primary"
        href="#pablo"
        onClick={(e) => {
          e.preventDefault();
          props.submit();
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default FormTab1;
