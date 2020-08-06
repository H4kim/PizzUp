import React from "react";
import classes from "./WLayout.css";
import WSideBar from "../WSidebar/WSideBar";
import Home from "../../Containers/Home/Home";
import { Switch, Route } from "react-router";
import HomeModelProvider from "../../Context/HomeModelContext";

const WLayout = (props) => {
  return (
    <div className={classes.container}>
      <WSideBar />
      <Switch>
        <Route path="/" exact>
          <HomeModelProvider>
            <Home />
          </HomeModelProvider>
        </Route>
      </Switch>
    </div>
  );
};

export default WLayout;
