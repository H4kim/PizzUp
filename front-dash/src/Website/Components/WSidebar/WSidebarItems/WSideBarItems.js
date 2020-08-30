import React from "react";
import classes from "./WSideBarItems.css";
import HomeIcon from "../../../../assets/Svg/HomeIcon";
import CreditCardIcon from "../../../../assets/Svg/CreditCardIcon";
import QuestionIcon from "../../../../assets/Svg/QuestionIcon";
import WSidebarItem from "./WSidebarItem/WSidebarItem";
const WSideBarItems = (props) => {
  return (
    <ul className={classes.ul}>
      <WSidebarItem link="/order">
        <HomeIcon size="40" color="black" />
      </WSidebarItem>
      <WSidebarItem link="/order/myOrders">
        <CreditCardIcon size="40" color="black" />
      </WSidebarItem>
      <WSidebarItem link="/help">
        <QuestionIcon size="40" color="black" />
      </WSidebarItem>
    </ul>
  );
};

export default WSideBarItems;
