import React, { useState, useEffect } from "react";
import classes from "./Expenses.css";
import axios from "axios";
import Table from "../../Components/UI/Table/Table";
import Input from "../../Components/Input/Input";

const Expenses = () => {
  //Set STATE
  const [expenses, setExpenses] = useState([]);
  const [isUpd, setisUpd] = useState(false);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/expenses")
      .then((resp) => {
        setExpenses(resp.data.data);
      })
      .catch((err) => console.log(err));
  }, [isUpd]);

  //ADD Expenses
  const addExpenseHandler = async (e) => {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:5000/api/expenses`, formValues)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => console.log(err.response.data));

    setisUpd(!isUpd);
  };
  //Delete Func
  const deleteExpenseHandler = (id) => {
    const expCopy = [...expenses];

    const index = expCopy.findIndex((cur) => {
      return cur._id === id;
    });
    expCopy.splice(index, 1);

    axios
      .delete(`http://127.0.0.1:5000/api/expenses/${id}`)
      .then(() => {
        setExpenses(expCopy);
      })
      .catch((err) => console.log(err.response.data));
  };

  const updateExpenseHandler = (id, inputValue) => {
    const req = { ...inputValue };
    delete req._id;
    console.log(req);
    axios
      .patch(`http://127.0.0.1:5000/api/expenses/${id}`, req)
      .then((resp) => {
        setisUpd(!isUpd);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };
  //RENDER()
  return (
    <div className={classes.container}>
      <Table
        tHeads={["id", "title", "amount", "suplier", "actions"]}
        initialState={{ _id: "", title: "", amount: "", suplier: "" }}
        tData={expenses}
        deleteHandler={() => deleteExpenseHandler}
        updateHandler={() => updateExpenseHandler}
      />
      <form className={classes.form} onSubmit={addExpenseHandler}>
        <Input ph="Title" name="title" onInputChange={inputChangeHandler} />
        <Input ph="Amount" name="amount" onInputChange={inputChangeHandler} />
        <Input ph="Suplier" name="suplier" onInputChange={inputChangeHandler} />
        <button type="submit" className={classes.button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Expenses;
