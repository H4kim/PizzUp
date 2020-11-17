import React, { useContext, useState } from "react";
import classes from "./Login.css";
import {AlertContext} from './../../../../Context/AlertContext'
import Axios from "axios";
import {Redirect} from 'react-router-dom'
import AlertMsg from "../../../../utils/AlertMsg/AlertMsg";
const Login = (props) => {
  const AlertMsgContext = useContext(AlertContext)
  const [redirect, setRedirect] = useState(false)
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
      withCredentials: true,
    })
      .then((resp) => {
        console.log(resp);
        console.log(document.cookie);
        AlertMsgContext.toggleDisplay('green', 'Welcome back , you will be redirected to the order page')
        setTimeout(() => {
          setRedirect(() => true)
        },2500)

      })
      .catch((err) => {
        console.log("err", err.response);
        AlertMsgContext.toggleDisplay('red', err.response.data.message)

      });
  };
  return (
    <div className={classes.container}>
      <AlertMsg />
      {redirect ? <Redirect to='/order'/> : null }
      <h1>Sign in</h1>
      <input
        className={classes.input}
        type="email"
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
