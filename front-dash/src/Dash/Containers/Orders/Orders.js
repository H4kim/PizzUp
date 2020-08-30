import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Orders.css";
import List from "../../Components/List/List";
const Order = (props) => {
  const [orders, setOrders] = useState([]);
  const heads = ["Date", "Phone", "Total Price", "Status", "Action"];

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/orders", {
        credentials: "include",
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.navStatus}>
        <div className={classes.boxStatus}>New</div>
        <div className={classes.boxStatus}>Prepparing</div>
        <div className={classes.boxStatus}>Delivered</div>
        <div className={classes.boxStatus}>Cancelled</div>
      </div>
      <List heads={heads} data={orders} />
    </div>
  );
};

export default Order;
