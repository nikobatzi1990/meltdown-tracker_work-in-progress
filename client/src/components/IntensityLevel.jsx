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
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1694480953/number_1_glcplx.png"
        onClick={onClick}
        alt="Level 1"
        title="Level 1"
      />

      <input
        type="image"
        id="2"
        className="intensity__input"
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1694481004/number_2_is4p8l.png"
        onClick={onClick}
        alt="Level 2"
        title="Level 2"
      />

      <input
        type="image"
        id="3"
        className="intensity__input"
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1694481007/number_3_zirrfq.png"
        onClick={onClick}
        alt="Level 3"
        title="Level 3"
      />

      <input
        type="image"
        id="4"
        className="intensity__input"
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1694481011/number_4_hrhmmx.png"
        onClick={onClick}
        alt="Level 4"
        title="Level 4"
      />

      <input
        type="image"
        id="5"
        className="intensity__input"
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1694481012/number_5_ra5e2q.png"
        onClick={onClick}
        alt="Level 5"
        title="Level 5"
      />
    </div>
  );
}

IntensityLevel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IntensityLevel;
