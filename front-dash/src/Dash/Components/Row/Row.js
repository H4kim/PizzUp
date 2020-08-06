import React from "react";
import classes from "./Row.css";
function Row(props) {
  const data = props.data.map((cur, i) => {
    return <p key={i}>{cur}</p>;
  });

  return (
    <div className={classes.container}>
      {data}
      <button className={classes.button} onClick={props.deleteRow}>
        Delete
      </button>
      <button className={classes.button} onClick={props.updateRow}>
        Update
      </button>
    </div>
  );
}

export default Row;
