import React, { useState } from "react";
import "./Carousel.css";

const Carousel = props => {
  const [index, setIdex] = useState(0);
  const [img, setImg] = useState(props.images[0]);

  const right = () => {
    if (index < props['images'].length - 1) {
      setImg(props['images'][index + 1]);
      setIdex(index + 1);
    } else {
      setImg(props['images'][0]);
      setIdex(0);
    }
  }

  const left = () => {
    if (index > 0) {
      setImg(props['images'][index - 1]);
      setIdex(index - 1);
    } else {
      setImg(props.images[props['images'].length - 1]);
      setIdex(props['images'].length - 1);
    }
  }

  return (
    <div id="Carousel">
      <button onClick={left}>Left</button>
      <img src={img} alt="img" />
      <button onClick={right}>Right</button>
    </div>
  );
};

export default Carousel;