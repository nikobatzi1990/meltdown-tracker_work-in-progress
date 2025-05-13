import React from "react";
import PropTypes from "prop-types";
import RadioInput from "./RadioInput";

function IntensityLevel(props) {
  const { onChange, intensity } = props;

  return (
    <fieldset className="flex gap-5">
      <legend className="my-1">Meltdown Intensity:</legend>

      <RadioInput
        value="1"
        id="intensity-1"
        name="intensity"
        labelText="1"
        onChange={onChange}
        checked={intensity === "1"}
      />

      <RadioInput
        value="2"
        id="intensity-2"
        name="intensity"
        labelText="2"
        onChange={onChange}
        checked={intensity === "2"}
      />

      <RadioInput
        value="3"
        id="intensity-3"
        name="intensity"
        labelText="3"
        onChange={onChange}
        checked={intensity === "3"}
      />

      <RadioInput
        value="4"
        id="intensity-4"
        name="intensity"
        labelText="4"
        onChange={onChange}
        checked={intensity === "4"}
      />

      <RadioInput
        value="5"
        id="intensity-5"
        name="intensity"
        labelText="5"
        onChange={onChange}
        checked={intensity === "5"}
      />
    </fieldset>
  );
}

IntensityLevel.propTypes = {
  onChange: PropTypes.func.isRequired,
  intensity: PropTypes.string.isRequired,
};

export default IntensityLevel;
