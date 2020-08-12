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

  let rows;
  let price;
  if (props.order.orderDetails) {
    rows = props.order.orderDetails.map((cur) => {
      price = cur.quantity * cur.product.price;
      return (
        <div key={cur._id} className={classes.row}>
          <div className={classes.box}>
            <img
              className={classes.productImg}
              src={`http://127.0.0.1:5000/images/products/${cur.product.image}`}
            />
          </div>
          <div className={classes.box}>{cur.product.name}</div>
          <div className={classes.box}>{cur.quantity} </div>
          <div className={classes.box}>{price} $</div>
        </div>
      );
    });
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>{heads}</div>
      {rows}
    </div>
  );
};

export default CartDetails;
