import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  const { className } = props;

  return (
    <footer className={className}>
      <p>© 2023 - 2025 Meltown Tracker</p>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
