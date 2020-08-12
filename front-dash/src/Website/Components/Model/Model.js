import React, { useContext } from "react";
import { HomeModelContext } from "../../Context/HomeModelContext";

import classes from "./Model.css";
const Model = (props) => {
  const ModelContext = useContext(HomeModelContext);
  let currentClass = classes.displayNone;
  if (ModelContext.isModelDisplayed) currentClass = classes.modelDisplay;

  const closeModel = () => {
    ModelContext.toggleModel();
  };
  return (
    <div className={currentClass}>
      <div className={classes.content}>
        <div className={classes.closeModel} onClick={closeModel}>
          X
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Model;
