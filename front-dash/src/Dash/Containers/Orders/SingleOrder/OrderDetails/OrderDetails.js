import React from "react";
import classes from "./OrderDetails.css";
const OrderDetails = (props) => {
  return (
    <div className={classes.Details}>
      <div className={classes.header}>
        <h2>Order Details</h2>
      </div>
      <div className={classes.Content}>
        <p>
          Order ID : <span>545d4545s4d54545sd45</span>
        </p>
        <p>
          Number of Unique Item: : <span>3</span>
        </p>
        <p>
          Order Status : <span>New</span>
        </p>
        <p>
          Total Price : <span>122$</span>
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
