import React, { useState, useEffect } from "react";
import classes from "./Products.css";
import axios from "axios";
import Table from "../../Components/UI/Table/Table";
import Input from "../../Components/Input/Input";

const Products = () => {
  //Set STATE
  const [products, setProducts] = useState([]);
  const [isUpd, setisUpd] = useState(false);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/products")
      .then((resp) => {
        setProducts(resp.data.data);
        console.log(resp.data.data);
      })
      .catch((err) => console.log(err));
  }, [isUpd]);

  //ADD Products
  const addProductHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:5000/api/products`, formValues)
      .then((resp) => {
        console.log(resp);
        setisUpd(!isUpd);
      })
      .catch((err) => console.log(err.response.data));
  };
  //Delete Func
  const deleteProductHandler = (id) => {
    const listCopy = [...products];

    const index = listCopy.findIndex((cur) => {
      return cur._id === id;
    });
    listCopy.splice(index, 1);

    axios
      .delete(`http://127.0.0.1:5000/api/products/${id}`)
      .then(() => {
        setProducts(listCopy);
      })
      .catch((err) => console.log(err.response.data));
  };

  const updateProductHandler = (id, inputValue) => {
    const req = { ...inputValue };
    delete req._id;
    console.log(req);
    axios
      .patch(`http://127.0.0.1:5000/api/products/${id}`, req)
      .then((resp) => {
        console.log(resp);
        setisUpd(!isUpd);
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
        tHeads={["featured", "id", "name", "price", "category", "actions"]}
        initialState={{
          _id: "",
          name: "",
          price: "",
          category: "",
          featured: "",
        }}
        tData={products}
        deleteHandler={() => deleteProductHandler}
        updateHandler={() => updateProductHandler}
      />
      <form className={classes.form} onSubmit={addProductHandler}>
        <Input
          ph="featured"
          name="featured"
          onInputChange={inputChangeHandler}
        />
        <Input ph="name" name="name" onInputChange={inputChangeHandler} />
        <Input ph="price" name="price" onInputChange={inputChangeHandler} />
        <Input
          ph="category"
          name="category"
          onInputChange={inputChangeHandler}
        />
        <button type="submit" className={classes.button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Products;
