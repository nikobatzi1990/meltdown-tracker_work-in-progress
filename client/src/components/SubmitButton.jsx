import React from "react";
import PropTypes from "prop-types";

function SubmitButton(props) {
  const { className, text, title } = props;

  return (
    <button title={title} className={className} type="submit">
      {" "}
      {text}
    </button>
  );
}

SubmitButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

SubmitButton.defaultProps = {
  className: "",
  text: "",
  title: "",
};

export default SubmitButton;
