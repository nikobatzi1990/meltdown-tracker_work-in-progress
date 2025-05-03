import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function IntensityLevel(props) {
  const { onClick } = props;
  return (
    <div className="flex gap-5" alt="Meltdown Intensity">
      <p>Meltdown Intensity:</p>

      <Input
        type="radio"
        id="intensity-1"
        name="intensity"
        onClick={onClick}
        alt="Level 1"
        labelText="1"
      />

      <Input
        type="radio"
        id="intensity-2"
        name="intensity"
        onClick={onClick}
        alt="Level 2"
        labelText="2"
      />

      <Input
        type="radio"
        id="intensity-3"
        name="intensity"
        onClick={onClick}
        alt="Level 3"
        labelText="3"
      />

      <Input
        type="radio"
        id="intensity-4"
        name="intensity"
        onClick={onClick}
        alt="Level 4"
        labelText="4"
      />

      <Input
        type="radio"
        id="intensity-5"
        name="intensity"
        onClick={onClick}
        alt="Level 5"
        labelText="5"
      />
    </div>
  );
}

IntensityLevel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IntensityLevel;
