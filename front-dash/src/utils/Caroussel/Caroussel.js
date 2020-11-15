import React from "react";
import classes from "./Caroussel.css";
import Carousel from "react-elastic-carousel";
import Product from "../../Website/Containers/Product/Product";
import WProduct from "../../Website/Components/WProducts/WProduct/WProduct";

const Caroussel = ({ items }) => {
  let itms = [];
  if (items.length > 0) {
    console.log("object");
    itms = items.map((cur) => {
      return (
        <WProduct
          key={cur._id}
          id={cur._id}
          name={cur.name}
          price={cur.price}
          image={`http://127.0.0.1:5000/images/products/${cur.image}`}
          addToCart={false}
        />
      );
    });
  }
  return (
    <div>
      <Carousel itemsToScroll={1} itemsToShow={2.5}>
        {itms}
      </Carousel>
    </div>
  );
};

export default Caroussel;
