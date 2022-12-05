import React, { useState } from "react";

import FormTab1 from "./FormTab1/FormTab1";
import FormTab2 from "./FormTab2/FormTab2";
import FormTab3 from "./FormTab3/FormTab3";
var defaultConfig = require("../../../default");
const FillDataForm = (props) => {
  const [tab, setTab] = useState(1);
  const [state, setState] = useState({
    mobileNumber: "",
    homeNumber: "",
    email: "",
    workEmail: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    snapchat: "",
    youtube: "",
    instagram: "",
    whatsapp: "",
    viber: "",
    address: "",
    birthday: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const nextTabs = () => {
    setTab(tab + 1);
  };
  const prevTab = () => {
    setTab(tab - 1);
  };
  const submit = () => {
    fetch(defaultConfig.endpoint + "/auth/fillData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.match.params.id,
        mobileNumber: state.mobileNumber,
        homeNumber: state.homeNumber,
        email: state.email,
        workEmail: state.workEmail,
        twitter: state.twitter,
        linkedin: state.linkedin,
        facebook: state.facebook,
        snapchat: state.snapchat,
        youtube: state.youtube,
        instagram: state.instagram,
        whatsapp: state.whatsapp,
        viber: state.viber,
        address: state.address,
        birthday: state.birthday,
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Creating or editing a post failed!");
        }
        props.history.push("/profile-page/" + props.match.params.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, []);
  const showTab = () => {
    switch (tab) {
      case 1:
        return (
          <FormTab1
            state={state}
            nextTabs={nextTabs}
            handleOnChange={handleOnChange}
          />
        );
      case 2:
        return (
          <FormTab2
            state={state}
            nextTabs={nextTabs}
            prevTab={prevTab}
            handleOnChange={handleOnChange}
          />
        );
      case 3:
        return (
          <FormTab3
            state={state}
            submit={submit}
            prevTab={prevTab}
            handleOnChange={handleOnChange}
          />
        );
      default:
        return <FormTab1 />;
    }
  };
  return (
    <>
      <div className="page-header" style={{}}>
        <div className="container registration">
          <div className="card-5" style={{ minHeight: "500px" }}>
            {showTab()}
          </div>
        </div>
      </div>
    </>
  );
};

export default FillDataForm;
