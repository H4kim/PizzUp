import React from "react";
import classes from "./Sign.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
const Sign = () => {
  return (
    <div className={classes.container}>
      <Login />
      <hr className={classes.separator}></hr>
      <div className={classes.textSeparator}>
        or
      </div>
      <Register />
    </div>
  );
};

export default Sign;
