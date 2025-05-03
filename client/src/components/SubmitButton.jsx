import React from "react";
import PropTypes from "prop-types";

function SubmitButton(props) {
  const { text } = props;
  return (
    <button className="cursor-pointer rounded-md" type="submit">
      {text}
    </button>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string,
};

SubmitButton.defaultProps = {
  text: "" || "Submit",
};

export default SubmitButton;
