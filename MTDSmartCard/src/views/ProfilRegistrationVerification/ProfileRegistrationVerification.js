import React, { useState, useEffect } from "react";

import ProfilePage from "../ProfilePage/ProfilePage";
import RegistrationPage from "../RegistrationPage/RegisterPage";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage500 from "../ErrorPages/500ErrorPage/TechicalErrorPage";
import VerifyEmail from "./VerifyEmail/VerifyEmail";
var defaultConfig = require("../../default");
const ProfileRegistrationVerification = (props) => {
  const [verified, setVerified] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [id] = useState(props.match.params.id);

  const useForceUpdate = () => {
    setVerified(4);
  };
  useEffect(() => {
    console.log("___________________");
    console.log(props.location.search);
    const url = defaultConfig.endpoint + "/profile/findProfileById/" + id;
    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          props.setReg(true);
          setVerified(2);
          return;
        } else if (res.status === 401) {
          props.setReg(true);
          setVerified(4);
          return;
        } else if (res.status === 201) {
          props.setReg(true);
          setVerified(5);
          return;
        } else {
          console.log("USao");
          props.setReg(false);
          setVerified(1);
          return;
        }
      })
      .catch((err) => {
        props.setReg(false);
        setVerified(3);
      });
  }, [id, refresh]);

  React.useEffect(() => {
    props.setPageChange(true);
  }, [props.reload]);
  const renderComponent = () => {
    switch (verified) {
      case 0:
        return <LoadingPage />;
      case 1:
        return (
          <RegistrationPage
            id={id}
            refresh={refresh}
            setRefresh={setRefresh}
            setPageChange={props.setPageChange}
            pageChange={props.pageChange}
            useForceUpdate={useForceUpdate}
            setLocalStorage={props.setLocalStorage}
          />
        );
      case 2:
        return (
          <ProfilePage
            setPageChange={props.setPageChange}
            pageChange={props.pageChange}
            setEditProfileFromMenu={props.setEditProfileFromMenu}
            editProfileFromMenu={props.editProfileFromMenu}
            id={id}
            token={props.token}
            userId={props.userId}
            location={props.location}
            history={props.history}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        );
      case 3:
        return <ErrorPage500 />;
      case 4:
        return <VerifyEmail />;
      case 5:
        return (
          <ProfilePage
            setPageChange={props.setPageChange}
            pageChange={props.pageChange}
            setEditProfileFromMenu={props.setEditProfileFromMenu}
            editProfileFromMenu={1}
            setRefresh={setRefresh}
            refresh={refresh}
            id={id}
            token={props.token}
            userId={props.userId}
            location={props.location}
            history={props.history}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default ProfileRegistrationVerification;
