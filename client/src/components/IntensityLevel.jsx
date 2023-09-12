import React from "react";
import axios from "axios";

const IntensityLevel = (props) => {
  const { onClick } = props;
  return (
    <div className="intensity-level" alt="Meltdown Intensity">
      <p>Meltdown Intensity</p>
      
      <input 
        type="image"
        id="1"
        className="intensity__input"
        onClick={ onClick }
        alt="Level 1"
        title="Level 1" 
      />

      <input 
        type="image"
        id="2"
        className="intensity__input"
        onClick={ onClick }
        alt="Level 2"
        title="Level 2"
      />

      <input 
        type="image"
        id="3"
        className="intensity__input"
        onClick={ onClick }
        alt="Level 3"
        title="Level 3"
      />

      <input 
        type="image"
        id="4"
        className="intensity__input"
        onClick={ onClick }
        alt="Level 4"
        title="Level 4"
      />

      <input 
        type="image"
        id="5"
        className="intensity__input"
        onClick={ onClick }
        alt="Level 5"
        title="Level 5"
      />

    </div>
  )
};

export default IntensityLevel;
