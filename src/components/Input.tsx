import React from "react";
import TextField from "@mui/material/TextField";
import { PassInputData } from "../interfaces/PassInputData";

const Input: React.FC<PassInputData> = (props) => {
  return (
    <TextField
      onChange={props.handleChange}
      value={props.inputValue}
      type="number"
      label="Type Product ID:"
      InputProps={{ inputProps: { min: 1, max: 12 } }}
    />
  );
};

export default Input;
