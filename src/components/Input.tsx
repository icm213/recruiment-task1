import React from "react";
import TextField from "@mui/material/TextField";
import { InputData } from "../interfaces/inputData";

const Input: React.FC<InputData> = (props) => {
  // bug in firefox - input value shows values of type string ?????????????????????????????????????????????????

  return (
    <TextField
      onChange={props.handleChange}
      value={props.inputValue}
      type="number"
      label="Type Product ID:"
    />
  );
};

export default Input;
