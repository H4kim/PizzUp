import React from "react";
import TableRow from "./TableRow/TableRow";
import classes from "./Table.css";

export default function Table(props) {
  const tableHeads = props.tHeads.map((cur, i) => {
    return (
      <th key={i} className={classes.th}>
        {cur}
      </th>
    );
  });

  let row = props.tData.map((cur) => {
    return (
      <TableRow
        key={cur._id}
        rowData={cur}
        rowId={cur._id}
        initialState={props.initialState}
        onRowDelete={props.deleteHandler()}
        onRowUpdate={props.updateHandler()}
      />
    );
  });

  return (
    <React.Fragment>
      <table className={classes.table}>
        <thead>
          <tr>{tableHeads}</tr>
        </thead>
        <tbody>{row}</tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </React.Fragment>
  );
}
