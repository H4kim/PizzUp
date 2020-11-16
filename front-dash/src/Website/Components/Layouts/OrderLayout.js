import React from "react";
import classes from "./WLayout.css";
import WSideBar from "../WSidebar/WSideBar";
import Home from "../../Containers/Home/Home";
import { Switch, Route } from "react-router";
import HomeModelProvider from "../../../Context/HomeModelContext";
import AlertProvider from "../../../Context/AlertContext";
import MyOrders from "../../Containers/MyOrders/MyOrders";
import Product from "../../Containers/Product/Product";

const OrderLayout = (props) => {
  return (
    <div className={classes.container}>
      <WSideBar />
      <AlertProvider>
        <Switch>
          <Route path="/order" exact>
            <HomeModelProvider>
              <Home />
            </HomeModelProvider>
          </Route>
          <Route path="/order/myOrders" exact>
            <MyOrders />
          </Route>
          <Route path="/order/:productId" exact component={Product} />
        </Switch>
      </AlertProvider>
    </div>
  );
};

export default OrderLayout;
