import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Axios from "axios";
import Title from "../../Components/Title/Title";
import classes from "./MyOrders.css";
import MyOrder from "./MyOrder/MyOrder";
import Caroussel from "../../../utils/Caroussel/Caroussel";
const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:5000/api/orders/myOrders", {
      credentials: "include",
      withCredentials: true,
    })
      .then((resp) => {
        setMyOrders(resp.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  //Get the filter from query params
  const filter = new URLSearchParams(useLocation().search).get("filter");
  let filtred;
  if (filter) {
    filtred = myOrders.filter((cur) => {
      return cur.status === filter;
    });
  } else filtred = [...myOrders];

  let myOrd;
  if (filtred.length > 0) {
    myOrd = filtred.map((cur) => {
      return (
        <MyOrder
          key={cur._id}
          price={cur.totalPrice}
          date={cur.date}
          address={cur.address}
          phone={cur.phone}
          totalItems={cur.orderNum}
          status={cur.status}
        />
      );
    });
  }

  return (
    <div className={classes.container}>
      <Title bold="My">Orders</Title>
      <nav className={classes.nav}>
        <Link to="/order/myOrders" className={classes.filter}>
          All
        </Link>
        <Link to="/order/myOrders?filter=processing" className={classes.filter}>
          Processing
        </Link>
        <Link to="/order/myOrders?filter=cancelled" className={classes.filter}>
          Cancelled
        </Link>
        <Link to="/order/myOrders?filter=delivered" className={classes.filter}>
          Delivered
        </Link>
      </nav>
      {myOrd}
    </div>
  );
};

export default MyOrders;
