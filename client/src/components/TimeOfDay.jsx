import React from "react";
import RadioInput from "./RadioInput";

function TimeOfDay() {
  return (
    <fieldset className="flex gap-5">
      <legend>Time of Day:</legend>

      <RadioInput
        value="morning"
        id="morning"
        name="timeOfDay"
        labelText="Morning"
        defaultChecked="true"
      />

      <RadioInput
        value="afternoon"
        id="afternoon"
        name="timeOfDay"
        labelText="Afternoon"
      />

      <RadioInput
        value="evening"
        id="evening"
        name="timeOfDay"
        labelText="Evening"
      />

      <RadioInput value="night" id="night" name="timeOfDay" labelText="Night" />
    </fieldset>
  );
}

export default TimeOfDay;
