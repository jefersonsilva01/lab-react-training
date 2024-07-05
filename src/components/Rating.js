import React from "react";

const Rating = props => {
  const stars = '★'.repeat(Math.round(props.children))
    + '☆'.repeat(5 - Math.round(props.children))

  return <h1>{stars}</h1>;
};

export default Rating;
