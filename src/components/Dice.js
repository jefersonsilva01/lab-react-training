import React, { useState } from "react";

const Dice = props => {
  let [dice, setDice] = useState(
    `/assets/images/dice${(Math.random() * (6 - 1) + 1).toFixed(0)}.png`
  );

  const click = () => {
    setDice("/assets/images/dice-empty.png")

    setTimeout(() => {
      setDice(
        `/assets/images/dice${(Math.random() * (6 - 1) + 1).toFixed(0)}.png`
      )
    }, 1000)
  }

  const styles = {
    height: "100px",
    width: "100px",
    margin: "16px auto"
  }

  return (
    <img style={styles} src={dice} onClick={click} alt="dice" />
  );
}

export default Dice;