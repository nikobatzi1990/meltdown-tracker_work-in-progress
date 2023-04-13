import React from "react";
import "./Input.css";

const Input = (props) => {
  const { className, htmlFor, placeholder, type, value, onChange } = props;

  return (
    <>
      <form> { htmlFor } </form>
      <input
        className = { className }
        placeholder = { placeholder }
        type = { type }
        value = { value }
        onChange = { onChange }>
      </input>
    </>
  )
};

export default Input;