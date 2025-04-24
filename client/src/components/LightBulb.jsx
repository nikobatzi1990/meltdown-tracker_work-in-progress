import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./styles/LightBulb.css";

function LightBulb(props) {
  const { className, onClick, title } = props;

  return (
    <Button
      title={title}
      className={className}
      text={<span>emoji_objects</span>}
      onClick={onClick}
    />
  );
}

LightBulb.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};

LightBulb.defaultProps = {
  className: "",
  title: "",
};

export default LightBulb;
