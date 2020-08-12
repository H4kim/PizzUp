import React, { useState, useEffect } from "react";
import classes from "./SingleOrder.css";
import { useRouteMatch } from "react-router";
import Axios from "axios";
import CustomerDetails from "./CustomerDetails/CustomerDetails";
import OrderDetails from "./OrderDetails/OrderDetails";
import CartDetails from "./CartDetails/CartDetails";
import ColoredButton from "../../../Components/UI/ColoredButton/ColoredButton";

//BUG
const SingleOrder = (props) => {
  const [order, setOrder] = useState({});
  const [orderState, setOrderState] = useState();

  const { params } = useRouteMatch();

  useEffect(() => {
    Axios.get(`http://127.0.0.1:5000/api/orders/${params.id}`)
      .then((resp) => {
        setOrder((order) => resp.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.id]);

  useEffect(() => {
    Axios.patch(`http://127.0.0.1:5000/api/orders/${params.id}`, {
      status: orderState,
    })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orderState]);

  //get data for the order details component
  const detailsAboutOrder = {
    orderId: order._id,
    orderNum: order.orderNum,
    status: order.status,
    totalPrice: order.totalPrice,
  };

  const onChangeState = (state) => {
    setOrderState((prev) => state);
    setOrder((prev) => {
      const newOrder = {
        ...prev,
        status: state,
      };
      return newOrder;
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.topTables}>
        <CustomerDetails />
        <OrderDetails data={detailsAboutOrder} />
      </div>
      <div className={classes.cartDetails}>
        <h1 style={{ marginBottom: "30px" }}>Carte Details</h1>
        <CartDetails order={order} />
      </div>
      <div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
        <h1>Order State</h1>
      </div>
      <div className={classes.orderSate}>
        <ColoredButton
          clicked={() => onChangeState("new")}
          text="New"
          color="#4caf50"
        />
        <ColoredButton
          clicked={() => onChangeState("processing")}
          text="Processing"
          color="#1976d2"
        />
        <ColoredButton
          clicked={() => onChangeState("delivered")}
          text="Delivered"
          color="orange"
        />
        <ColoredButton
          clicked={() => onChangeState("cancelled")}
          text="Cancelled"
          color="#ff5252"
        />
      </div>
    </div>
  );
};

export default SingleOrder;
