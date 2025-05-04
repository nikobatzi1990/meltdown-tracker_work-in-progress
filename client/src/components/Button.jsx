import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { text, onClick } = props;

  return (
    <button
      className="cursor-pointer rounded-md"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
