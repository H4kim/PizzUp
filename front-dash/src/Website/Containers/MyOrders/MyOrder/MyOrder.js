import React from "react";
import classes from "./MyOrder.css";
const MyOrder = (props) => {
  let statusStyle = {
    color: "#00bcd4",
    fontFamily: `"Rock Salt", cursive `,
    fontSize: "10px",
  };

  switch (props.status) {
    case "processing":
      statusStyle.color = "#FF7A00";
      break;
    case "delivered":
      statusStyle.color = "#21E11D";
      break;
    case "cancelled":
      statusStyle.color = "#F20000";
  }

  return (
    <div className={classes.container}>
      <p className={classes.price}>{props.price}$</p>
      <p>{props.date}</p>
      <p>{props.address}</p>
      <p>{props.phone}</p>
      <p>{props.totalItems} items</p>
      <p style={statusStyle}>{props.status}</p>
    </div>
  );
};

export default MyOrder;
