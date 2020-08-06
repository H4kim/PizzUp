import React, { useState, useEffect } from "react";
import classes from "./Categories.css";
import axios from "axios";
import Table from "../../Components/UI/Table/Table";
import Input from "../../Components/Input/Input";

const Categories = () => {
  //Set STATE
  const [categories, setCategories] = useState([]);
  const [isUpd, setisUpd] = useState(false);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/categories")
      .then((resp) => {
        setCategories(resp.data.data);
        console.log(resp.data.data);
      })
      .catch((err) => console.log(err));
  }, [isUpd]);

  //ADD Categories
  const addCategoriesHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:5000/api/categories`, formValues)
      .then((resp) => {
        console.log(resp);
        setisUpd(!isUpd);
      })
      .catch((err) => console.log(err.response.data));
  };
  //Delete Func
  const deleteCategoriesHandler = (id) => {
    const listCopy = [...categories];

    const index = listCopy.findIndex((cur) => {
      return cur._id === id;
    });
    listCopy.splice(index, 1);

    axios
      .delete(`http://127.0.0.1:5000/api/categories/${id}`)
      .then(() => {
        setCategories(listCopy);
      })
      .catch((err) => console.log(err.response.data));
  };

  const updateCategoriesHandler = (id, inputValue) => {
    const req = { ...inputValue };
    delete req._id;
    console.log(req);
    axios
      .patch(`http://127.0.0.1:5000/api/categories/${id}`, req)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    setisUpd(!isUpd);
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
        tHeads={["id", "name", "actions"]}
        initialState={{
          _id: "",
          name: "",
        }}
        tData={categories}
        deleteHandler={() => deleteCategoriesHandler}
        updateHandler={() => updateCategoriesHandler}
      />
      <form className={classes.form} onSubmit={addCategoriesHandler}>
        <Input ph="name" name="name" onInputChange={inputChangeHandler} />
        <button type="submit" className={classes.button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Categories;
