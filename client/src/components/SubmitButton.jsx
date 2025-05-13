import React from "react";
import PropTypes from "prop-types";

function SubmitButton(props) {
  const { text } = props;
  return (
    <button
      className="p-1 cursor-pointer border-none rounded-md bg-sky-900 text-white"
      type="submit"
    >
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
