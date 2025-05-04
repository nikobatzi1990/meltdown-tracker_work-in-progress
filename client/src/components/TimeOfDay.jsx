import React from "react";
import PropTypes from "prop-types";
import RadioInput from "./RadioInput";

function TimeOfDay(props) {
  const { onChange, timeOfDay } = props;

  return (
    <fieldset className="flex gap-5">
      <legend>Time of Day:</legend>

      <RadioInput
        value="morning"
        id="morning"
        name="timeOfDay"
        labelText="Morning"
        onChange={onChange}
        checked={timeOfDay === "morning"}
      />

      <RadioInput
        value="afternoon"
        id="afternoon"
        name="timeOfDay"
        labelText="Afternoon"
        onChange={onChange}
        checked={timeOfDay === "afternoon"}
      />

      <RadioInput
        value="evening"
        id="evening"
        name="timeOfDay"
        labelText="Evening"
        onChange={onChange}
        checked={timeOfDay === "evening"}
      />

      <RadioInput
        value="night"
        id="night"
        name="timeOfDay"
        labelText="Night"
        checked={timeOfDay === "night"}
      />
    </fieldset>
  );
}

TimeOfDay.propTypes = {
  onChange: PropTypes.func.isRequired,
  timeOfDay: PropTypes.string.isRequired,
};

export default TimeOfDay;
