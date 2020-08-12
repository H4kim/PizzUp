import React from "react";
import classes from "./OrderDetails.css";
const OrderDetails = (props) => {
  const data = props.data;
  return (
    <div className={classes.Details}>
      <div className={classes.header}>
        <h2>Order Details</h2>
      </div>
      <div className={classes.Content}>
        <p>
          Order ID : <span>{data.orderId}</span>
        </p>
        <p>
          Number of Unique Item: : <span>{data.orderNum}</span>
        </p>
        <p>
          Order Status : <span>{data.status}</span>
        </p>
        <p>
          Total Price : <span>{data.totalPrice}$</span>
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
