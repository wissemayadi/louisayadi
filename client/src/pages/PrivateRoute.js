import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  if (!isAuth) return <Redirect to="/signin" />;

  return (
  <div>
  <Route {...rest} render={(props) => <Component {...props} />} />;
  </div>
  )};

export default PrivateRoute;