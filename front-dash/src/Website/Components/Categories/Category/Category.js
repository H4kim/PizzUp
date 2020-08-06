import React from "react";
import classes from "./Category.css";

const Category = (props) => {
  return (
    <li
      onClick={() => props.click(props.category)}
      className={classes.container}
    >
      <div className={classes.subContainer}>{props.children}</div>
      <p className={classes.text}>{props.text}</p>
    </li>
  );
};

export default Category;
