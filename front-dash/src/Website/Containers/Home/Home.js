import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import classes from "./Home.css";
import { HomeModelContext } from "../../../Context/HomeModelContext";
import Title from "../../Components/Title/Title";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Categories from "../../Components/Categories/Categories";
import WProducts from "../../Components/WProducts/WProducts";
import Cart from "../Cart/Cart";
import Model from "../../Components/Model/Model";
import OrderForm from "../../Components/OrderForm/OrderForm";

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [needUp, setNeedUp] = useState(false);

  const ModelContext = useContext(HomeModelContext);

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("products"));
    if (ls) {
      setCartProducts(JSON.parse(localStorage.getItem("products")));
    } else {
      localStorage.setItem("products", "[]");
    }
  }, [needUp]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/products")
      .then((resp) => {
        setProducts(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const categoryClickHandler = (category) => {
    let link = `http://127.0.0.1:5000/api/products?category=${category}`;
    if (category === "all") link = "http://127.0.0.1:5000/api/products";
    axios
      .get(link)
      .then((resp) => {
        setProducts(resp.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const onSearchSubmitHandler = (value, e) => {
    if (e.key === "Enter") {
      axios
        .get(`http://127.0.0.1:5000/api/products?name=${value}`)
        .then((resp) => {
          setProducts(resp.data.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const onAddToCartHandler = (prod) => {
    const ls = JSON.parse(localStorage.getItem("products"));
    //add quantity key to the ls products

    for (let i = 0; i < ls.length; i++) {
      if (ls[i]._id === prod._id) {
        return null;
      }
    }
    const product = {
      ...prod,
      quantity: 1,
    };
    if (ls) {
      ls.push(product);
      localStorage.setItem("products", JSON.stringify(ls));
    } else {
      localStorage.setItem(`products`, JSON.stringify([product]));
    }
    setNeedUp(!needUp);
  };

  const onDeleteCartProductHandler = (id) => {
    const newCartProduct = cartProducts.filter((cur) => {
      return cur._id !== id;
    });

    localStorage.setItem("products", JSON.stringify(newCartProduct));
    setNeedUp(!needUp);
  };

  const onOrderHandler = () => {
    ModelContext.toggleModel();
  };

  return (
    <div className={classes.container}>
      <Model>
        <Title bold="Order">Now</Title>
        <OrderForm cartProducts={cartProducts} />
      </Model>

      <div className={classes.main}>
        <header className={classes.header}>
          <Title bold="Menu">Category</Title>
          <SearchBar
            options={products}
            onSearchSubmit={onSearchSubmitHandler}
          />
        </header>
        <nav className={classes.nav}>
          <Categories click={categoryClickHandler} />
        </nav>
        <main>
          <Title bold="Choose">Order</Title>
          <WProducts
            products={products}
            onAddToCart={(product) => onAddToCartHandler(product)}
          />
        </main>
      </div>
      <Cart
        products={cartProducts}
        onOrder={onOrderHandler}
        deleteCartProduct={(id) => onDeleteCartProductHandler(id)}
      />
    </div>
  );
};

export default Home;
