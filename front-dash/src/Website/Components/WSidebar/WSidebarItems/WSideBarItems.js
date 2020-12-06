import React from "react";
import classes from "./WSideBarItems.css";
import HomeIcon from "../../../../assets/Icons/HomeIcon";
import CartIcon from "../../../../assets/Icons/CartIcon";
import QuestionIcon from "../../../../assets/Icons/QuestionIcon";
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
      <WSidebarItem link="/help">
        <QuestionIcon size="40" color="black" />
      </WSidebarItem>
    </ul>
  );
};

export default WSideBarItems;
