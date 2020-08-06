import React from "react";
import classes from "./CartDetails.css";
const CartDetails = (props) => {
  const headsName = ["image", "Product", "Quantity", "Price"];

  const heads = headsName.map((cur, i) => {
    return (
      <div key={i} className={classes.box}>
        {cur}
      </div>
    );
  });

  // const or = props.orders.map((cur) => {
  //   return 1;
  // });

  return (
    <div className={classes.container}>
      <div className={classes.header}>{heads}</div>
      <div className={classes.row}>
        <div className={classes.box}>image</div>
        <div className={classes.box}>product name</div>
        <div className={classes.box}>Quantity </div>
        <div className={classes.box}>125 $</div>
      </div>
    </div>
  );
};

export default CartDetails;
