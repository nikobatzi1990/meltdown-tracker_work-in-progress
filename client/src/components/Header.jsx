import React from "react";
import "./Header.css"

const Header = (props) => {
  const { className, text } = props;
  
  return (
    <h1 className={ className }>{ text }</h1>
  )
};

Header.defaultProps = {
  className: "",
  text: "",
};

export default Header;