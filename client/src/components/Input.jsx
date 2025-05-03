import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  const { className, placeholder, type, value, onChange, labelText, name, id } =
    props;

  return (
    <label htmlFor={id} className="flex flex-col">
      {labelText}
      <input
        id={id}
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  id: "",
  className: "",
  placeholder: "",
  type: "text",
  value: "",
  labelText: "",
  name: "",
};

export default Input;
