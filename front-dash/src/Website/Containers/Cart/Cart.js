import React from "react";
import { motion } from "framer-motion";

import classes from "./Cart.css";
import Title from "../../Components/Title/Title";
import CartProducts from "../../Components/CartProducts/CartProducts";

const Cart = (props) => {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
  };

  let orderBtn = <div className={classes.placeHolderText}>Your Orders Will Appear Here </div>;
  if (props.products.length > 0) {
    orderBtn = (
      <motion.button
        positionTransition={spring}
        className={classes.orderBtn}
        onClick={props.onOrder}
      >
        Order
      </motion.button>
    );
  }
  return (
    <div className={classes.container}>
      <Title bold="Your">Cart</Title>
      <CartProducts
        products={props.products}
        deleteCartProduct={props.deleteCartProduct}
      />
      {orderBtn}
    </div>
  );
};

export default Cart;
