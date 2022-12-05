import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import throttle from "lodash.throttle";

//Alert
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// styles
import "assets/css/bootstrap.min.css";

import "./styles/style.scss";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

//Redux store
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

//LocalStorage
import { saveStore } from "./localStorage/localStorage";

//Router
import AppRoutes from "./routers/routers";

//Scroll to top
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const store = configureStore();

store.subscribe(
  throttle(() => {
    saveStore(store.getState());
  }, 1000)
);

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <ScrollToTop />
        <AppRoutes store={store} />
      </AlertProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
