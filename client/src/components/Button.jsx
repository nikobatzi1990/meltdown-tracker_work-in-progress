import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { text, onClick, className } = props;

  return (
    <button className={className} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: "",
};

export default Button;
