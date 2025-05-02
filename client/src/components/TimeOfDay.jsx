import React from "react";
import PropTypes from "prop-types";

function TimeOfDay(props) {
  const { onClick } = props;

  return (
    <div className="time-of-day" alt="Time of Day Selection">
      <p>Time of Day</p>

      <input
        type="image"
        id="Morning"
        className="time__input"
        onClick={onClick}
        alt="Morning"
        title="Morning (5am ~ 11am)"
        src=""
      />

      <input
        type="image"
        id="Afternoon"
        className="time__input"
        onClick={onClick}
        src=""
        alt="Afternoon"
        title="Afternoon (11am ~ 5pm)"
      />

      <input
        type="image"
        id="Evening"
        className="time__input"
        onClick={onClick}
        src=""
        alt="Evening"
        title="Evening (5pm ~ 8pm)"
      />

      <input
        type="image"
        id="Night"
        className="time__input"
        onClick={onClick}
        src=""
        alt="Night"
        title="Night (8pm ~ 5am)"
      />
    </div>
  );
}

TimeOfDay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TimeOfDay;
