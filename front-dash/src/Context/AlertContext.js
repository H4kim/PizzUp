import React, { useState } from "react";

export const AlertContext = React.createContext({
  isAlertDisplayed: false,
  backColor: "green",
  toggleDisplay: () => {},
});

export default (props) => {
  const [isAlertDisplayed, setIsAlertDisplayed] = useState(false);
  const [backColor, setBackColor] = useState("green");
  const [message, setMessage] = useState("Something went wrong");

  const toggleDisplay = (color, msg) => {
    setMessage((prev) => msg);
    setBackColor((prev) => color);
    setIsAlertDisplayed(true);
    setTimeout(() => {
      setIsAlertDisplayed(false);
    }, 2500);
  };
  return (
    <AlertContext.Provider
      value={{ isAlertDisplayed, backColor, message, toggleDisplay }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
