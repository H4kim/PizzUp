import React from "react";
import { Link } from "react-router-dom";
import classes from "./List.css";
const List = (props) => {
  //Set the headers table
  const heads = props.heads.map((cur, i) => {
    return (
      <div key={i} className={classes.box}>
        {cur}
      </div>
    );
  });
  //Get the table data
  const data = props.data.map((cur) => {
    return (
      <div key={cur._id} className={classes.row}>
        <div className={classes.box}>{cur.date}</div>
        <div className={classes.box}>{cur.phone}</div>
        <div className={classes.box}>{cur.totalPrice} $</div>
        <div className={classes.box}>{cur.status}</div>
        <div className={classes.box}>
          <Link to={`/admin/orders/${cur._id}`} className={classes.actionBtn}>
            Details
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.header}>{heads}</div>
      {/* <div className={classes.row}>{data}</div> */}
      {data}
    </div>
  );
};

export default List;
