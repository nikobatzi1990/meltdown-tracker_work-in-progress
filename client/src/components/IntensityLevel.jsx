import React from "react";
import RadioInput from "./RadioInput";

function IntensityLevel() {
  return (
    <fieldset className="flex gap-5">
      <legend>Meltdown Intensity:</legend>

      <RadioInput
        value="1"
        id="intensity-1"
        name="intensity"
        labelText="1"
        defaultChecked="true"
      />

      <RadioInput value="2" id="intensity-2" name="intensity" labelText="2" />

      <RadioInput value="3" id="intensity-3" name="intensity" labelText="3" />

      <RadioInput value="4" id="intensity-4" name="intensity" labelText="4" />

      <RadioInput value="5" id="intensity-5" name="intensity" labelText="5" />
    </fieldset>
  );
}

export default IntensityLevel;
