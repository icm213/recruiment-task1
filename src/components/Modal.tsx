import React from "react";
import { handleProductName } from "../methods/handleProductName";

import { passDataToModal } from "../interfaces/passDataToModal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const Modal: React.FC<passDataToModal> = (props) => {
  return (
    <div className="modal--bg">
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
          <li>Name:</li>
          <li>ID:</li>
          <li>Year:</li>
          <li>Color:</li>
          <li>Pantone value:</li>
        </ul>
        <ul>
          <li> {handleProductName(props.name)}</li>
          <li>{props.id}</li>
          <li>{props.year}</li>
          <li>{props.color}</li>
          <li>{props.pantone_value}</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
