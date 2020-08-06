import React from "react";

import classes from "./SideItems.css";
import SideItem from "./SideItem/SideItem";
function SideItems() {
  return (
    <ul className={classes.SideItems}>
      <SideItem link="/admin/dashboard">Dashboard</SideItem>
      <SideItem link="/admin/customers">Customers</SideItem>
      <SideItem link="/admin/sales">Sales</SideItem>
      <SideItem link="/admin/expenses">Expenses</SideItem>
      <SideItem link="/admin/products">Products</SideItem>
      <SideItem link="/admin/categories">Categories</SideItem>
      <SideItem link="/admin/orders">Orders</SideItem>
      <SideItem link="/admin/account">Account</SideItem>
    </ul>
  );
}

export default SideItems;
