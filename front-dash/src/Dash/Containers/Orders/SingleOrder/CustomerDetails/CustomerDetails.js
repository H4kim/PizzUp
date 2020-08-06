import React from "react";
import classes from "./CustomerDetails.css";

const CustomerDetails = (props) => {
  return (
    <div className={classes.Details}>
      <div className={classes.header}>
        <h2>Customer Details</h2>
      </div>
      <div className={classes.Content}>
        <p>
          Customer Name : <span>Hakim Bencella</span>
        </p>
        <p>
          Email Adress : <span>hakiimben@gmail.com</span>
        </p>
        <p>
          Phone Number : <span>0551212145</span>
        </p>
        <p>
          Country : <span>Algeria</span>
        </p>
        <p>
          City : <span>Oued Rhiou</span>
        </p>
        <p>
          Delivery Adresse : <span>City 80 Logs la caat</span>
        </p>
      </div>
    </div>
  );
};

export default CustomerDetails;
