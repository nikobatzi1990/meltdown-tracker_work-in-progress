import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  const { className, text } = props;

  return (
    <footer className={className}>
      <p>{text}</p>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
  text: "",
};

export default Footer;
