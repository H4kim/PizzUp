import React, { useState } from "react";
import classes from "./TableRow.css";

function TableRow(props) {
  const [isUpd, setIsUpd] = useState(false);
  const [inputValue, setInputValue] = useState(props.initialState);

  //onSave
  const changeIsUpd = () => {
    setIsUpd(!isUpd);
  };

  //On input change
  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    setInputValue({ ...inputValue, [name]: value });
  };

  //Display Rows
  let row;
  if (!isUpd) {
    row = Object.keys(props.rowData).map((cur, i) => {
      if (cur !== "__v" && cur !== "date" && cur !== "categoryId") {
        return (
          <td className={classes.td} key={i}>
            {props.rowData[cur].toString()}
          </td>
        );
      }
      return null;
    });
  } else {
    row = Object.keys(props.rowData).map((cur, i) => {
      if (cur !== "__v" && cur !== "date" && cur !== "categoryId") {
        return (
          <td className={classes.td} key={i}>
            <input
              name={cur}
              className={classes.updateInput}
              value={inputValue[cur]}
              onChange={(e) => inputChangeHandler(e)}
            />
          </td>
        );
      }
      return null;
    });
  }

  //Display Save Button
  let save;
  if (isUpd) {
    save = (
      <button
        className={[classes.button, classes.saveBtn].join(" ")}
        onClick={() => {
          props.onRowUpdate(props.rowId, inputValue);
          changeIsUpd();
        }}
      >
        Save
      </button>
    );
  }

  return (
    <tr className={classes.tr}>
      {row}
      <td className={classes.td}>
        <button
          className={[classes.button, classes.deleteBtn].join(" ")}
          onClick={() => {
            props.onRowDelete(props.rowId);
          }}
        >
          Delete
        </button>
        <button
          className={[classes.button, classes.updateBtn].join(" ")}
          onClick={() => {
            setIsUpd(!isUpd);
          }}
        >
          Update
        </button>
        {save}
      </td>
    </tr>
  );
}

export default TableRow;
