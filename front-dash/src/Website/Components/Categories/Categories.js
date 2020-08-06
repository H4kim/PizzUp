import React from "react";
import classes from "./Categories.css";
import Category from "./Category/Category";
import Hot from "../../../assets/Svg/Hot";
import Pizza from "../../../assets/Svg/Pizza";
import Coffee from "../../../assets/Svg/Coffee";
import Drink from "../../../assets/Svg/Drink";

const Categories = (props) => {
  return (
    <ul className={classes.container}>
      <Category click={props.click} category="all" text="All">
        <Hot styling={classes.icon} size="30" color="#BCC2D0" />
      </Category>
      <Category click={props.click} category="pizza" text="Pizza">
        <Pizza styling={classes.icon} size="30" color="#BCC2D0" />
      </Category>
      <Category click={props.click} category="tacos" text="Tacos"></Category>
      <Category click={props.click} category="burger" text="Burger"></Category>
      <Category click={props.click} category="coffee" text="Coffee">
        <Coffee styling={classes.icon} size="30" color="#BCC2D0" />
      </Category>
      <Category click={props.click} category="drink" text="Drink">
        <Drink styling={classes.icon} size="30" color="#BCC2D0" />
      </Category>
    </ul>
  );
};

export default Categories;
