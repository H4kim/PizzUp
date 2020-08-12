import React, { useState } from "react";
import classes from "./Login.css";
import Axios from "axios";
const Login = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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

  const onLoginHandler = () => {
    Axios.post("http://127.0.0.1:5000/api/users/login", inputs, {
      credentials: "include",
    })
      .then((resp) => {
        console.log(resp);
        console.log(document);
      })
      .catch((err) => {
        console.log("err", err.response);
      });
  };
  return (
    <div className={classes.container}>
      <h1>Sign in</h1>
      <input
        className={classes.input}
        placeholder="Email address"
        onChange={(e) => onChangeHandler(e, "email")}
      />
      <input
        className={classes.input}
        placeholder="Password"
        onChange={(e) => onChangeHandler(e, "password")}
      />
      <button className={classes.loginBtn} onClick={onLoginHandler}>
        Login
      </button>
    </div>
  );
};

export default Login;
