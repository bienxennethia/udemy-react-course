import React from "react";

import "./Field.css";

const Field = (props) => {

  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="number" id={props.id} value={props.userInput[props.id]} onChange={props.onChangeHandler} />
    </p>
  );
};

export default Field;