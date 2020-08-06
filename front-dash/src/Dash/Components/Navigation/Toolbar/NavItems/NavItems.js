import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.css";

const NavItems = () => {
  return (
    <ul className={classes.navItems}>
      <NavItem link="/">Website</NavItem>
      <NavItem link="#">Logout</NavItem>
    </ul>
  );
};

export default NavItems;
