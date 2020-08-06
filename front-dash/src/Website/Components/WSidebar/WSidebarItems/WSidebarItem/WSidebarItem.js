import React from "react";
import classes from "./WSideBarItem.css";
import { NavLink } from "react-router-dom";

const WSidebarItem = (props) => {
  return (
    <div className={classes.item}>
      <li className={classes.li}>
        <NavLink to={props.link}>{props.children}</NavLink>
      </li>
    </div>
  );
};

export default WSidebarItem;
