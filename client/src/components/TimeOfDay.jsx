import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function TimeOfDay(props) {
  const { onClick } = props;

  return (
    <div className="flex gap-5" alt="Time of Day Selection">
      <p>Time of Day:</p>

      <Input
        type="radio"
        id="morning"
        name="timeOfDay"
        onClick={onClick}
        alt="Morning"
        labelText="Morning"
      />

      <Input
        type="radio"
        id="afternoon"
        name="timeOfDay"
        onClick={onClick}
        alt="Afternoon"
        labelText="Afternoon"
      />

      <Input
        type="radio"
        id="evening"
        name="timeOfDay"
        onClick={onClick}
        alt="Evening"
        labelText="Evening"
      />

      <Input
        type="radio"
        id="night"
        name="timeOfDay"
        onClick={onClick}
        alt="Night"
        labelText="Night"
      />
    </div>
  );
}

TimeOfDay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TimeOfDay;
