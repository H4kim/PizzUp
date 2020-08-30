import React from "react";
import classes from "./WProduct.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WProduct = (props) => {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 200,
  };
  return (
    <motion.div
      positionTransition={spring}
      animate={{ opacity: 1 }}
      transition={{ from: 0, duration: 1.2 }}
      className={classes.container}
    >
      <img src={props.image} alt={props.name} className={classes.image} />
      <p className={classes.productName}>{props.name.toUpperCase()}</p>
      <p className={classes.productPrice}>{props.price} $</p>
      <Link
        to={`/order/${props.id}`}
        className={[classes.button, classes.see].join(" ")}
      >
        See Details
      </Link>
      <button
        className={[classes.button, classes.add].join(" ")}
        onClick={props.onAddToCart}
      >
        Add to Card
      </button>
    </motion.div>
  );
};

export default WProduct;
