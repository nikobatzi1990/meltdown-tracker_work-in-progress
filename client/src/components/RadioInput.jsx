import React from "react";
import PropTypes from "prop-types";

function RadioInput(props) {
  const { id, name, value, labelText, defaultChecked } = props;

  return (
    <label htmlFor={id} className="flex flex-col">
      {labelText}
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        defaultChecked={defaultChecked}
      />
    </label>
  );
}

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
};

RadioInput.defaultProps = {
  defaultChecked: false,
};

export default RadioInput;
