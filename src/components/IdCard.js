import React from "react";
import "./IdCard.css";

const IdCard = props => {
  let birth = `${props.birth.toLocaleString('default', { weekday: 'short' })}`;
  birth += ` ${props.birth.toLocaleString('default', { month: 'short' })}`;
  birth += ` ${props.birth.getDate()}`;
  birth += ` ${props.birth.getFullYear()}`;


  return (
    <div id="IdCard">
      <img src={props.picture} alt="cover" />
      <div>
        <p><strong>First name: </strong>{props.firstName}</p>
        <p><strong>Last name: </strong>{props.lastName}</p>
        <p><strong>Gender: </strong>{props.gender}</p>
        <p><strong>Height: </strong>{props.height}</p>
        <p><strong>Birth: </strong>{birth}</p>
      </div>
    </div>
  );
}

export default IdCard;