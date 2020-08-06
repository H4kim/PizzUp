import React, { useState } from "react";
import classes from "./OrderForm.css";
import Axios from "axios";
const OrderForm = (props) => {
  const [formData, setFormData] = useState({ phone: "", address: "" });

  const inputChangeHandler = (e, input) => {
    const inputValue = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [input]: inputValue,
      };
    });
  };

  const submitOrderHandler = (cartProducts) => {
    const obj = {
      phone: formData.phone,
      orderDetails: [
        {
          quantity: 2,
          product: "5f09cc7a7cde0642f085b3a4",
        },
        {
          quantity: 1,
          product: "5f09cc937cde0642f085b3a5",
        },
      ],
    };
    Axios.post("http://127.0.0.1:5000/api/orders", obj)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.form}>
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
