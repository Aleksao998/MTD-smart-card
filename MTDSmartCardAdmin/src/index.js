import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// core components
import "./styles/styles.scss";
import AppRoutes from "./router/Router.js";
import "assets/css/material-dashboard-react.css?v=1.8.0";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <AppRoutes />
  </BrowserRouter>,

  document.getElementById("root")
);
