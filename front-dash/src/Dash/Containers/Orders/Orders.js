import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Orders.css";
import List from "../../Components/List/List";
const Order = (props) => {
  const [orders, setOrders] = useState([]);
  const heads = ["Date", "Phone", "Total Price", "Status", "Action"];

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/orders")
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={classes.container}>
      <List heads={heads} data={orders} />
    </div>
  );
};

export default Order;