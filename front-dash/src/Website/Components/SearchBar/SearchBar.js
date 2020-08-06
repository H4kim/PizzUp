import React from "react";
import classes from "./SearchBar.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchBar = (props) => {
  return (
    <div className={classes.searchInput}>
      <Autocomplete
        id="test"
        freeSolo
        options={props.options.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            onKeyPress={(e) => props.onSearchSubmit(params.inputProps.value, e)}
            {...params}
            label="Search for food,Coffee.."
            // margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
    // <div className={classes.container}>
    //   <input
    //     className={classes.searchInput}
    //     placeholder="Search for food,Coffee.."
    //   />
    // </div>
  );
};

export default SearchBar;
