import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductInfo.css";
import Caroussel from "../../../utils/Caroussel/Caroussel";
import CartIcon from "../../../assets/Svg/CartIcon";
import { set } from "mongoose";
const ProductInfo = ({ product, products }) => {
  const [cartNum, setCartNum] = useState(0);
  const [needUpd, setNeedUpd] = useState(false);
  const productCarousel = products.filter((cur) => {
    return product.category === cur.category;
  });

  useEffect(() => {
    setCartNum((prev) => JSON.parse(localStorage.getItem("products")).length);
  }, [needUpd]);

  const ls = JSON.parse(localStorage.getItem("products"));
  const addToCart = () => {
    const prod = {
      ...product,
      quantity: 1,
    };
    if (ls) {
      ls.push(prod);
      localStorage.setItem("products", JSON.stringify(ls));
      setNeedUpd((prev) => !prev);
    } else {
      localStorage.setItem(`products`, JSON.stringify([prod]));
      setNeedUpd((prev) => !prev);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.topInfo}>
        <Link to="/order" className={classes.backBtn}>
          &#8592; Back to product
        </Link>
        <div className={classes.cartContainer}>
          <div className={classes.itemsNum}>{ls.length}</div>
          <CartIcon styling={classes.cartIcon} />
        </div>
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
        <button className={classes.addBtn} onClick={addToCart}>
          ADD TO CART
        </button>
        <p className={classes.price}>{product.price}$</p>
      </div>
      <p className={classes.productName}>Similar products</p>
      <Caroussel items={productCarousel} />
    </div>
  );
};

export default ProductInfo;
