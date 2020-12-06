import React from "react";
import classes from "./WSideBarItems.css";
import HomeIcon from "../../../../assets/Icons/HomeIcon";
import CartIcon from "../../../../assets/Icons/CartIcon";
import LogoutIcon from "../../../../assets/Icons/LogoutIcon";
import LoginIcon from "../../../../assets/Icons/LoginIcon";
import WSidebarItem from "./WSidebarItem/WSidebarItem";
const WSideBarItems = (props) => {
  return (
    <ul className={classes.ul}>
      <WSidebarItem link="/order">
        <HomeIcon size="40" color="black" />
      </WSidebarItem>
      <WSidebarItem link="/order/myorders">
        <CartIcon size="40" color="black" />
      </WSidebarItem>
      <WSidebarItem link="/">
        <LogoutIcon size="40" color="orangered" />
      </WSidebarItem>
    </ul>
  );
};

export default WSideBarItems;
