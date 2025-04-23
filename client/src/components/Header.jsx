import React from "react";
import "./styles/Header.css";

function Header(props) {
  const { className, text } = props;

  return <h1 className={className}>{text}</h1>;
}

Header.defaultProps = {
  className: "",
  text: "",
};

export default Header;
