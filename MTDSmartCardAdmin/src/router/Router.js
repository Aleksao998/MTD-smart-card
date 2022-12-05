import React, { useState } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import AdminDashBoard from "layouts/AdminDashBoard.js";
import AdminUsers from "layouts/AdminUsers.js";
import AdminOrders from "layouts/AdminOrders";
import AdminLogin from "views/AdminLogin/AdminLogin";
const AppRoutes = (props) => {
  const [isAutenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  const authenticateUser = (token, id) => {
  
    setIsAuthenticated(true);
    setToken(token);
    setUserId(id);
  };
  const logOut = () => {
    console.log("logout");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setIsAuthenticated(false);
    setToken("");
    setUserId("");
  };
  return (
    <div>
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <AdminLogin {...props} authenticateUser={authenticateUser} />
          )}
          exact
        />
        <Route
          path="/admin/dashboard"
          render={(props) =>
            localStorage.getItem("token") ? (
              <AdminDashBoard {...props} logout={logOut} token={token} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/admin/user"
          render={(props) =>
            localStorage.getItem("token") ? (
              <AdminUsers {...props} logout={logOut} token={token} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/admin/orders"
          render={(props) =>
            localStorage.getItem("token") ? (
              <AdminOrders {...props} logout={logOut} token={token} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>
    </div>
  );
};

export default withRouter(AppRoutes);
