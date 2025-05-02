import React from "react";
import PropTypes from "prop-types";

function IntensityLevel(props) {
  const { onClick } = props;
  return (
    <div className="intensity-level" alt="Meltdown Intensity">
      <p>Meltdown Intensity</p>

      <input
        type="image"
        id="1"
        className="intensity__input"
        src=""
        onClick={onClick}
        alt="Level 1"
      />

      <input
        type="image"
        id="2"
        className="intensity__input"
        src=""
        onClick={onClick}
        alt="Level 2"
      />

      <input
        type="image"
        id="3"
        className="intensity__input"
        src=""
        onClick={onClick}
        alt="Level 3"
      />

      <input
        type="image"
        id="4"
        className="intensity__input"
        src=""
        onClick={onClick}
        alt="Level 4"
      />

      <input
        type="image"
        id="5"
        className="intensity__input"
        src=""
        onClick={onClick}
        alt="Level 5"
      />
    </div>
  );
}

IntensityLevel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IntensityLevel;
