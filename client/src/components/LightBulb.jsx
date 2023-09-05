import React from "react";
import './styles/LightBulb.css';
import Button from "./Button";

const LightBulb = (props) => {
  const { className, onClick, title } = props;

  return (
    <Button
      title={ title } 
      className={className}
      text= {<span>emoji_objects</span> }
      onClick={ onClick } />
  )
}

export default LightBulb;
