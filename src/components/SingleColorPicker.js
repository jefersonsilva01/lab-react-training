import React from "react";

const SingleColorPicker = ({ color, value, onChange }) => {
  const colorChange = (event) => {
    onChange(color, Number(event.target.value));
  };

  let rColor = 0,
    gColor = 0,
    bColor = 0;

  if (color === 'r') {
    rColor = Number(value)
  } else if (color === 'g') {
    gColor = Number(value)
  } else if (color === 'b') {
    bColor = Number(value)
  };

  return (
    <div style={
      {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "150px",
        margin: "16px 0"
      }
    }>
      <div style={
        {
          width: "40px",
          height: "40px",
          border: "2px solid #000",
          backgroundColor: `rgb(${rColor}, ${gColor}, ${bColor})`
        }
      }>
      </div>
      <label>{color.toUpperCase()}:</label>
      <input
        onChange={colorChange}
        value={value}
        type="number"
        max="255"
        min="0"
        style={
          {
            width: "50px",
          }
        } />
    </div>
  );
};

export default SingleColorPicker;