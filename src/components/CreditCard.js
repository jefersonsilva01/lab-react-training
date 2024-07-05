import React from "react";
import './CreditCard.css'

const CreditCard = (props) => {
  let month, type;
  let year = props['expirationYear'].toString().slice(2, 4);
  let number = props['number'].toString().slice(12, 16)

  if (props.expirationMonth > 9) {
    month = props.expirationMonth
  } else {
    month = '0' + props.expirationMonth
  };

  if (props.type === "Visa") {
    type = <span className="visa">Visa</span>
  } else {
    type = <>
      <div className="red"></div>
      <div className="yellow"></div>
      <span className="mastercard">Mastercard</span>
    </>
  }

  const styles = {
    backgroundColor: props.bgColor,
    color: props.color,
  }

  return (
    <div style={styles} id="CreditCard">
      <div className="type">
        {type}
      </div>
      <h2>**** **** **** {number}</h2>
      <p>Expires {month}/{year} &nbsp;&nbsp; {props.bank}</p>
      <p>{props.owner}</p>
    </div>
  )
}

export default CreditCard;