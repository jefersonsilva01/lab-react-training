import React, { useState } from "react";

const ClickablePicture = props => {

  const [img, setImg] = useState(props.img)

  const click = () => {
    if (img === props.img) {
      setImg(props.imgClicked)
    } else {
      setImg(props.img);
    };
  };

  const styles = {
    height: "200px",
    width: "200px",
    display: "block",
    margin: "16px auto"
  }

  return (
    <img style={styles} src={img} onClick={click} alt="cover" />
  );
}

export default ClickablePicture;