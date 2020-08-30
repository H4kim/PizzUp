import React, { useContext, useEffect } from "react";
import classes from "./AlertMsg.css";
import { AlertContext } from "../../Context/AlertContext";

const AlertMsg = (props) => {
  const alertContext = useContext(AlertContext);
  let styling = {
    position: "absolute",
    top: "0",
    opacity: `${alertContext.isAlertDisplayed ? 1 : 0} `,
    left: "50%",
    transform: "translateX(-50%)",
    transition: "all .3s ease-out",
    backgroundColor: `${alertContext.backColor}`,
    color: "white",
    padding: " 8px 50px",
    borderRadius: "3px",
    fontSize: "18px",
  };

  return (
    <div style={styling}>
      <p>{alertContext.message}</p>
    </div>
  );
};

export default AlertMsg;
