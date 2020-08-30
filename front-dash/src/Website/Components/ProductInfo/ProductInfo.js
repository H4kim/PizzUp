import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductInfo.css";
import Caroussel from "../../../utils/Caroussel/Caroussel";
const ProductInfo = ({ product }) => {
  return (
    <div className={classes.container}>
      <div style={{ marginBottom: "80px" }}>
        <Link to="/order" className={classes.backBtn}>
          &#8592; Back to product
        </Link>
      </div>
      <p className={classes.category}>{product.category}</p>
      <p className={classes.productName}>{product.name}</p>
      <div className={classes.info}>
        <p className={classes.description}>
          Est adipisicing anim exercitation culpa in ad reprehenderit ea. Est ea
          culpa amet consectetur dolore ad pariatur excepteur. Aliquip pariatur
          dolor eiusmod laboris Lorem cillum do reprehenderit laboris veniam ut
          aliqua. Ullamco dolore sit magna culpa tempor quis.
        </p>
        {/* TODO ingredients*/}
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.addBtn}>ADD TO CART</button>
        <p className={classes.price}>{product.price}$</p>
      </div>
      <Caroussel />
    </div>
  );
};

export default ProductInfo;
