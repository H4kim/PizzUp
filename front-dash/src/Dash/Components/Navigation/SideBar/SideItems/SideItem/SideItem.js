import React from "react";
import classes from "./SideItem.css";
import { NavLink } from "react-router-dom";

function SideItem(props) {
  return (
    // <li className={classes.SideItem}>
    <NavLink
      className={classes.SideItem}
      to={props.link}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
    // </li>
  );
}

export default SideItem;
