import React, { useState } from "react";
import Axios from "axios";
import classes from "./Register.css";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });

  const onChangeHandler = (e, input) => {
    const value = e.target.value;
    setInputs((prev) => {
      return {
        ...prev,
        [input]: value,
      };
    });
  };

  const onRegisterHandler = () => {
    Axios.post("http://127.0.0.1:5000/api/users/signup", inputs)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log("err", err.response);
      });
  };

  return (
    <div className={classes.container}>
      <h1>Sign Up</h1>
      <input
        className={classes.input}
        placeholder="Name"
        onChange={(e) => onChangeHandler(e, "name")}
      />
      <input
        className={classes.input}
        type="email"
        placeholder="Email address"
        onChange={(e) => onChangeHandler(e, "email")}
      />
      <input
        className={classes.input}
        placeholder="Address"
        onChange={(e) => onChangeHandler(e, "address")}
      />
      <input
        className={classes.input}
        placeholder="Phone Number"
        onChange={(e) => onChangeHandler(e, "phone")}
      />
      <input
        className={classes.input}
        type="password"
        placeholder="Password"
        onChange={(e) => onChangeHandler(e, "password")}
      />
      <input
        className={classes.input}
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => onChangeHandler(e, "passwordConfirm")}
      />
      <button className={classes.registerBtn} onClick={onRegisterHandler}>
        Register
      </button>
    </div>
  );
};

export default Register;
