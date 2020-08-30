import React, { useEffect, useState } from "react";
import classes from "./Product.css";
import Axios from "axios";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
const Product = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    Axios.get(`http://127.0.0.1:5000/api/products/${match.params.productId}`)
      .then((resp) => {
        setProduct((prev) => resp.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [match.params.productId]);
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          className={classes.img}
          src={
            product.image
              ? `http://127.0.0.1:5000/images/products/${product.image}`
              : null
          }
        />
      </div>
      <ProductInfo product={product} />
    </div>
  );
};

export default Product;
