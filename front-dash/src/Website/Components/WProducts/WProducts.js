import React from "react";
import classes from "./WProducts.css";
import WProduct from "./WProduct/WProduct";

const WProducts = (props) => {
  const allProducts = props.products.map((cur) => {
    return (
      <WProduct
        key={cur._id}
        id={cur._id}
        name={cur.name}
        price={cur.price}
        image={`http://127.0.0.1:5000/images/products/${cur.image}`}
        onAddToCart={() => props.onAddToCart(cur)}
        addToCart={true}
      />
    );
  });

  return <div className={classes.container}>{allProducts}</div>;
};

export default WProducts;
