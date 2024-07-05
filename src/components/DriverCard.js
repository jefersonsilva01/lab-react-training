import React from "react";
import Rating from "./Rating";
import "./DriverCard.css"

const DriverCard = props => {


  return (
    <div id="DriverCard">
      <div>
        <img src={props.img} alt="cover" />
        <ul>
          <li>{props.name}</li>
          <li><Rating>{props.rating}</Rating></li>
          <li>{props.car.model} - {props.car.licensePlate}</li>
        </ul>
      </div>
    </div>
  );
};

export default DriverCard;