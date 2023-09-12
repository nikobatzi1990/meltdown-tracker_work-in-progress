import React from "react";
import "./styles/Input.css";

const Input = (props) => {
  const { className, htmlFor, placeholder, type, value, onChange, onSubmit } = props;

  return (
    <>
      <input
        className = { className }
        placeholder = { placeholder }
        type = { type }
        value = { value }
        onChange = { onChange } >
      </input>
    </>
  )
};

export default Input;