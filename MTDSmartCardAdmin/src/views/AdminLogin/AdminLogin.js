import React, { useState } from "react";
import { withRouter } from "react-router-dom";


const axios = require("axios");
function AdminLogin(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const loginAdmin = (event) => {
    event.preventDefault();
    fetch(
      "http://localhost:443/app/admin/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
        }),
      }
    )
      .then((res) => {
        if (res.status === 401) {
          throw new Error("Email or password incorect");
        }
        if (res.status !== 200) {
          throw new Error("Techical error");
        }
        return res.json();
      })
      .then((resData) => {
        localStorage.setItem("token", resData.token);
        localStorage.setItem("id", resData.data);
        props.authenticateUser(resData.token, resData.data);
        props.history.push("/admin/dashboard");
      })
      .catch((err) => {
        setError(err.message);
        return;
      });
  };
  return (
    <div class="login-page">
      <div class="admin-form">
        <h3>Admin Panel</h3>
        <p>{error}</p>
        <form class="login-form">
          <input
            type="text"
            name="email"
            placeholder="Email adresa"
            onChange={handleOnChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Šifra"
            onChange={handleOnChange}
          />
          <button onClick={loginAdmin}>Prijavi se</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(AdminLogin);
