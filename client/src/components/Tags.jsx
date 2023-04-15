import React from "react";
import "./Tags.css";
import Button from "./Button";
import Input from "./Input";

const Tags = (props) => {
  const { className, type, value, onChange, onSubmit } = props;

  return (
    <div
      className = { className }
      type = { type }
      value = { value }
      onChange = { onChange }
      onSubmit = { onSubmit }>

      <Input placeholder = "Search"/>

      <div> Tags appear here </div> 

      <Button text = "Add New Tag"/>
      
    </div>
  )
};

export default Tags;