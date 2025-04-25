import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const { className, placeholder, type, value, onChange } = props;

  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  className: "",
  placeholder: "",
  type: "text",
  value: "",
};

export default Input;
