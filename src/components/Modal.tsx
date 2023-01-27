import React from "react";
import { handleProductName } from "../methods/handleProductName";

import { PassProductData } from "../interfaces/PassProductData";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const Modal: React.FC<PassProductData> = (props) => {
  return (
    <div className="modal--bg" style={{ backgroundColor: `${props.color}40` }}>
      <div className="modal--close">
        <CloseRoundedIcon onClick={props.toggleModal} />
      </div>
      <div
        className="modal"
        style={{
          backgroundImage: `linear-gradient(45deg, #ddd, ${props.color}80, #ddd)`,
        }}
      >
        <ul>
          <li>
            <span>Name:</span>
            <span>{handleProductName(props.name)}</span>
          </li>
          <li>
            <span>ID:</span>
            <span>{props.id}</span>
          </li>
          <li>
            <span>Year:</span>
            <span>{props.year}</span>
          </li>
          <li>
            <span>Color:</span>
            <span>{props.color}</span>
          </li>
          <li>
            <span>Pantone value:</span>
            <span>{props.pantone_value}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
