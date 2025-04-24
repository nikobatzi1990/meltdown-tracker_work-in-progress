import React from "react";
import PropTypes from "prop-types";
import "./styles/Button.css";

function Button(props) {
  const { className, text, onClick, title } = props;

  return (
    <button title={title} className={className} type="button" onClick={onClick}>
      {" "}
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  title: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  text: "",
  title: "",
};

export default Button;
