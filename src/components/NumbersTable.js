import React from "react";

const NumbersTable = props => {
  const square = [],
    sizes = {
      display: "inline",
      width: "50px",
      height: "50px",
      "textAlign": "center",
      "margin": "0"
    },
    even = {
      backgroundColor: "red",
    },
    odd = {
      backgroundColor: "white",
    }

  for (let i = 1; i <= props.limit; i++) {
    i % 2 === 0
      ? square.push(<h1 style={{ ...even, ...sizes }}>{i}</h1>)
      : square.push(<h1 style={{ ...odd, ...sizes }}>{i}</h1>);
  }

  return (
    <div style={
      {
        display: "flex",
        flexWrap: "wrap",
        width: "500px",
        margin: "16px auto",
      }
    }>
      {square}
    </div>
  );
};

export default NumbersTable;