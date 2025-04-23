import React from "react";
import "./styles/Input.css";

function Input(props) {
  const { className, placeholder, type, value, onChange } = props;

  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}

export default Input;
