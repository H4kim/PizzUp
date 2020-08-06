import React from "react";
import classes from "./CartProducts.css";
import CartProduct from "./CartProduct/CartProduct";
const CartProducts = (props) => {
  let cartProducts = [];
  if (props.products) {
    cartProducts = props.products.map((cur) => {
      return (
        <CartProduct
          key={cur._id}
          id={cur._id}
          image={cur.image}
          price={cur.price}
          name={cur.name}
          quantity={cur.quantity}
          deleteCartProduct={() => props.deleteCartProduct(cur._id)}
        />
      );
    });
  }

  return <div className={classes.container}>{cartProducts}</div>;
};

export default CartProducts;
