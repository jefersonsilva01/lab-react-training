import React from "react";

const BoxColor = (props) => {
  let hex = "#";

  for (let i in props) {
    if (props[i] === 0) {
      hex += "00";
    } else {
      hex += props[i].toString(16);
    };
  }

  const bgColor = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    textAlign: 'center'
  }

  return (
    <>
      <h1 style={bgColor}>
        {bgColor.backgroundColor} <br />
        {hex}
      </h1>
    </>
  );
}

export default BoxColor;