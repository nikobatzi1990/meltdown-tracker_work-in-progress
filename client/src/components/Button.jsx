import React from "react";
import "./styles/Button.css";

function Button(props) {
  const { className, type, text, onClick, title } = props;

  return (
    <>
      <button title={title} className={className} type={type} onClick={onClick}>
        {" "}
        {text}
      </button>
    </>
  );
}

export default Button;
