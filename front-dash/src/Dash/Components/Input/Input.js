import React from "react";
import classes from "./Input.css";
const Input = (props) => {
  return (
    <div>
      <input
        className={classes.formInput}
        placeholder={props.ph}
        name={props.name}
        onChange={props.onInputChange}
      ></input>
    </div>
  );
};

export default Input;
