import React, { useState, useContext } from "react";
import classes from "./OrderForm.css";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { HomeModelContext } from "../../../Context/HomeModelContext";
import { AlertContext } from "../../../Context/AlertContext";
import AlertMsg from "../../../utils/AlertMsg/AlertMsg";

const OrderForm = (props) => {
  const [formData, setFormData] = useState({ phone: "", address: "" });
  const [redirect, setRedirect] = useState(false);

  const ModelContext = useContext(HomeModelContext);
  const AlertMsgContext = useContext(AlertContext);

  const inputChangeHandler = (e, input) => {
    const value = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [input]: value,
      };
    });
  };

  const submitOrderHandler = (cartProducts) => {
    const ls = JSON.parse(localStorage.getItem("products"));
    const orderDetails = ls.map((cur) => {
      return {
        quantity: cur.quantity,
        product: cur._id,
      };
    });

    const reqData = {
      phone: formData.phone,
      address: formData.address,
      orderDetails,
    };

    Axios.post("http://127.0.0.1:5000/api/orders", reqData, {
      credentials: "include",
      withCredentials: true,
    })
      .then((resp) => {
        localStorage.setItem("products", "[]");
        AlertMsgContext.toggleDisplay("green", "Order submitted successfully");
        setTimeout(() => {
          ModelContext.toggleModel();
          setRedirect((prev) => !prev);
        }, 1000);
      })
      .catch((err) => {
        console.log(err.response);
        AlertMsgContext.toggleDisplay("red", err.response.data.message);
      });
  };

  return (
    <div className={classes.form}>
      <AlertMsg />
      {redirect ? <Redirect to="/order/myOrders" /> : null}
      <div className={classes.marginTop}></div>
      <input
        placeholder="Phone Number"
        className={classes.input}
        onChange={(e) => inputChangeHandler(e, "phone")}
      />
      <input
        placeholder="Delivery address"
        className={classes.input}
        onChange={(e) => inputChangeHandler(e, "address")}
      />
      <button
        className={classes.orderBtn}
        onClick={() => submitOrderHandler(props.cartProducts)}
      >
        Submit Order
      </button>
    </div>
  );
};

export default OrderForm;
