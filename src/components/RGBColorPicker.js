import React, { useState } from "react";
import SingleColorPicker from './SingleColorPicker.js'

const RGBColorPicker = () => {
  const [rValue, setRColor] = useState(255);
  const [gValue, setGColor] = useState(255);
  const [bValue, setBColor] = useState(255);

  const setColor = (color, value) => {
    if (color === 'r') {
      setRColor(value)
    } else if (color === 'g') {
      setGColor(value)
    } else if (color === 'b') {
      setBColor(value)
    };
  }

  return (
    <div style={
      {
        width: "300px",
        margin: "32px auto"
      }
    }>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={setColor}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={setColor}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={setColor}
      />
      <div style={
        {
          display: "flex",
          alignItems: "center",
          margin: "0 0 16px 8px",
        }
      }>
        <div style={
          {
            border: "2px solid #000",
            width: "40px",
            height: "40px",
            backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
          }
        }>
        </div>
        <span
          style={
            {
              margin: "16px",
              fontWeight: "bolder",
              letterSpacing: "2px",
            }
          }
        >{`RGB(${rValue}, ${gValue}, ${bValue})`}</span>
      </div>
    </div>
  );
}

export default RGBColorPicker;