import React from "react";
import PropTypes from "prop-types";
import "./styles/Header.css";

function Header(props) {
  const { className, text } = props;

  return (
    <header>
      <h1 className={className}>{text}</h1>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

Header.defaultProps = {
  className: "",
  text: "",
};

export default Header;
