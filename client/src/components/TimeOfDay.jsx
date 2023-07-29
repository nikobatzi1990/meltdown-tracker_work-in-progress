import React, { useState } from "react";
import "./TimeOfDay.css";

const TimeOfDay = (props) => {
  const { onClick } = props;
  
  return (
    <div className="time-of-day">
      <p>Time of Day</p>
        <button
          className="Morning"
          onClick={ onClick } >
          <img
            src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888678/morning_rfereh.png" 
            alt="a bird and the morning sky" 
            title="Morning (5am ~ 11am)" />
        </button>
        <button
            className="Afternoon"
            onClick={ onClick } >
          <img 
            src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888682/afternoon_rdniws.png"
            alt="the sunny afternoon sky"
            title="Afternoon (11am ~ 5pm)" />
        </button>
        <button
          className="Evening"
          onClick={ onClick }>
          <img 
            src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1683356575/time3_yuu_wahh07.png"
            alt="the orange, evening sky"
            title="Evening (5pm ~ 8pm)" />
        </button>
        <button
          className="Night"
          onClick={ onClick } >
          <img 
            src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888684/night_nubelk.png"
            alt="the night sky"
            title="Night (8pm ~ 5am)" />
        </button>
    </div>
  )
};

export default TimeOfDay;