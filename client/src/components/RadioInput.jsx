import React from "react";
import PropTypes from "prop-types";

function RadioInput(props) {
  const { id, name, value, labelText, checked, onChange } = props;

  return (
    <label htmlFor={id} className="flex flex-col accent-sky-800">
      {labelText}
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
}

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

// RadioInput.defaultProps = {
//   defaultChecked: false,
// };

export default RadioInput;
