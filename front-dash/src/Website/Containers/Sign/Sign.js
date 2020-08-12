import React from "react";
import classes from "./Sign.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
const Sign = () => {
  return (
    <div className={classes.container}>
      <Login />
      <Register />
    </div>
  );
};

export default Sign;
