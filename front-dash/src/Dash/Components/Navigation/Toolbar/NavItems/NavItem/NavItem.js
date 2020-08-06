/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classes from "./NavItem.css";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <li className={classes.navItem}>
      <Link to={props.link}>{props.children}</Link>
    </li>
  );
}

export default NavItem;
