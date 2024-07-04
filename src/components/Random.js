import React from "react";

const Random = (props) => {

  const value = (Math.random() * (props.max - props.min) + props.min).toFixed(0);

  return (
    <h1>Random value between {props.min} and {props.max} => {value}</h1>
  );
};

export default Random;