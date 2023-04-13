import React from "react";
import "./Button.css";

const Button = (props) => {
  const { className, type, text, onClick } = props;

  return (
    <>
      <button
        className = { className }
        type = { type }
        onClick = { onClick }> { text }
      </button>
    </>
  )
};

export default Button;