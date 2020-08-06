import React from "react";
import classes from "./WSideBar.css";
import Logo from "../../../Dash/Components/UI/logo";
import WSideBarItems from "./WSidebarItems/WSideBarItems";

function WSideBar() {
  return (
    <div className={classes.Sidebar}>
      <Logo />
      <WSideBarItems />
    </div>
  );
}

export default WSideBar;
