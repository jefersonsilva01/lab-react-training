import React from "react";
import "./Greetings.css";

const Greetings = (props) => {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  };

  const greeting = greetings[props.lang] || "";

  return <h1>{greeting} {props.children}</h1>;
};

export default Greetings;