import React from "react";
import { tableProduct } from "../interfaces/tableProduct";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const Modal: React.FC<tableProduct> = (props) => {
  return (
    <div className="modal--bg">
      <div className="modal--close">
        <CloseRoundedIcon />
      </div>
      <div className="modal">
        <ul>
          <li>{props.id}</li>
          <li>{props.name}</li>
          <li>{props.year}</li>
          <li>{props.color}</li>
          <li>{props.pantone_value}</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
