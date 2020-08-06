import React, { useState, useEffect } from "react";
import classes from "./SingleOrder.css";
import { useRouteMatch } from "react-router";
import Axios from "axios";
import CustomerDetails from "./CustomerDetails/CustomerDetails";
import OrderDetails from "./OrderDetails/OrderDetails";
import CartDetails from "./CartDetails/CartDetails";

const SingleOrder = (props) => {
  const [order, setOrder] = useState({});
  const { params } = useRouteMatch();
  useEffect(() => {
    Axios.get(`http://127.0.0.1:5000/api/orders/${params.id}`)
      .then((resp) => {
        setOrder(() => resp.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.id]);
  // let x;
  // if (order.orderDetails) {
  //   x = order.map((cur) => cur);
  // }

  console.log(order.orderDetails);
  return (
    <div className={classes.container}>
      <div className={classes.topTables}>
        <CustomerDetails />
        <OrderDetails />
      </div>
      <div className={classes.cartDetails}>
        <h1>Carte Details</h1>
        <CartDetails orders={order} />
      </div>
    </div>
  );
};

export default SingleOrder;
