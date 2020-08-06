import React, { useState, useEffect } from "react";
import classes from "./CartProduct.css";
import { motion } from "framer-motion";

const CartProduct = (props) => {
  const [quantity, setQuantity] = useState(1);
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 400,
  };

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("products"));
    let quant;
    for (let i = 0; i < ls.length; i++) {
      if (ls[i]._id === props.id) {
        quant = ls[i].quantity;
      }
    }
    setQuantity(quant);
  }, [props.id]);

  const onQuantityChange = (direction) => {
    console.log("clicked");
    const ls = JSON.parse(localStorage.getItem("products"));
    console.log(ls);

    for (let i = 0; i < ls.length; i++) {
      if (ls[i]._id === props.id) {
        ls[i].quantity = quantity;
      }
    }
    console.log(ls);
    if (direction === "up") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }

    localStorage.setItem("products", JSON.stringify(ls));
  };

  return (
    <motion.div
      positionTransition={spring}
      className={classes.container}
      animate={{ opacity: 1 }}
      transition={{ from: 0.2, duration: 0.4 }}
    >
      <div className={classes.imageInfoContainer}>
        <img
          src={`http://127.0.0.1:5000/images/products/${props.image}`}
          alt="product"
          className={classes.image}
        />
        <div className={classes.info}>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.price}>{props.price} $</p>
        </div>
      </div>
      <div className={classes.quantityContainer}>
        <div
          className={classes.changeQuantity}
          onClick={() => onQuantityChange("down")}
        >
          -
        </div>
        <input
          className={classes.quantity}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <div
          className={classes.changeQuantity}
          onClick={() => onQuantityChange("up")}
        >
          +
        </div>
      </div>

      <button className={classes.delete} onClick={props.deleteCartProduct}>
        X
      </button>
    </motion.div>
  );
};

export default CartProduct;
