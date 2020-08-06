import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideBar from "../Navigation/SideBar/SideBar";
import classes from "./AdminLayout.css";
import Expenses from "../../Containers/Expenses/Expenses";
import Categories from "../../Containers/Categories/Categories";
import Products from "../../Containers/Products/Products";
import Orders from "../../Containers/Orders/Orders";
import SingleOrder from "../../Containers/Orders/SingleOrder/SingleOrder";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Toolbar />
      <div className={classes.container}>
        <SideBar />
        <Switch>
          <Route exact path="/admin/expenses" component={Expenses} />
          <Route exact path="/admin/categories" component={Categories} />
          <Route exact path="/admin/products" component={Products} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route exact path="/admin/orders/:id" component={SingleOrder} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
