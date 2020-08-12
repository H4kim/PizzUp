import React from "react";
import classes from "./ColoredButton.css";

const ColoredButton = (props) => {
  const btn = {
    backgroundColor: props.color,
    border: "none",
    padding: "15px 30px",
    color: "white",
    fontWeight: "600",
    width: "170px",
    fontSize: "17px",
    letterSpacing: "1px",
    cursor: "pointer",
  };

  return (
    <button style={btn} onClick={props.clicked}>
      {props.text}
    </button>
  );
};

export default ColoredButton;
