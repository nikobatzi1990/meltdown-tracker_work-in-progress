import React from "react";
import PropTypes from "prop-types";
import RadioInput from "./RadioInput";

function TimeOfDay(props) {
  const { onChange, timeOfDay } = props;

  return (
    <fieldset className="flex gap-5">
      <legend>Time of Day:</legend>

      <RadioInput
        value="Morning"
        id="morning"
        name="timeOfDay"
        labelText="Morning"
        onChange={onChange}
        checked={timeOfDay === "Morning"}
      />

      <RadioInput
        value="Afternoon"
        id="afternoon"
        name="timeOfDay"
        labelText="Afternoon"
        onChange={onChange}
        checked={timeOfDay === "Afternoon"}
      />

      <RadioInput
        value="Evening"
        id="evening"
        name="timeOfDay"
        labelText="Evening"
        onChange={onChange}
        checked={timeOfDay === "Evening"}
      />

      <RadioInput
        value="Night"
        id="night"
        name="timeOfDay"
        labelText="Night"
        checked={timeOfDay === "Night"}
      />
    </fieldset>
  );
}

TimeOfDay.propTypes = {
  onChange: PropTypes.func.isRequired,
  timeOfDay: PropTypes.string.isRequired,
};

export default TimeOfDay;
