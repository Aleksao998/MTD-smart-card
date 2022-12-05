import React, { useEffect, useState } from "react";
var defaultConfig = require("../../default");
const ProfileActivation = (props) => {
  const [text, setText] = useState("You have activated your account!");
  useEffect(() => {
    props.setPageChange(!props.pageChange);
    const url =
      defaultConfig.endpoint + "/auth/validateProfile/" + props.match.params.id;
    fetch(url)
      .then((res) => {
        if (res.status === 401) {
          return setText(
            "Email verification has experied scan your card again to register!"
          );
        } else if (res.status !== 200) {
          throw new Error("Creating or editing a post failed!");
        } else {
          return res.json();
        }
      })
      .then((resData) => {
        if (typeof resData.token !== "undefined") {
          if (typeof resData.verified !== "undefined") {
            props.setLocalStorage(resData.token, resData.userId);
            props.history.push("/profile-page/" + resData.userId);
            return;
          }
          props.setLocalStorage(resData.token, resData.userId);
          props.history.push("/fill-data/" + resData.userId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileActivation;
