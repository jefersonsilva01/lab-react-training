import React, { useState } from "react";

const LikeButton = props => {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [backgroundColor, setBackgroundcolor] = useState("purple");
  const [count, setCount] = useState(0);

  let styles = {
    backgroundColor: backgroundColor,
    margin: "16px",
    padding: "8px 16px",
    fontSize: "1.5em"
  };

  const click = () => {
    setBackgroundcolor(colors[Math.floor(Math.random() * colors.length)]);
    setCount(count + 1);
  }

  return (
    <button style={styles} onClick={click}>{count} Likes</button>
  );
};

export default LikeButton;