import React, { useState } from "react";

export const HomeModelContext = React.createContext({
  isModelDisplayed: false,
  toggleModel: () => {},
});

export default (props) => {
  const [isModelDisplayed, setIsModelDisplayed] = useState(false);

  const toggleModel = () => {
    setIsModelDisplayed((prev) => !prev)
  };
  return (
    <HomeModelContext.Provider value={{ isModelDisplayed, toggleModel }}>
      {props.children}
    </HomeModelContext.Provider>
  );
};
