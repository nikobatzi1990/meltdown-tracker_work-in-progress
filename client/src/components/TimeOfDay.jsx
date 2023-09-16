import React from "react";
import "./styles/TimeOfDay.css";

const TimeOfDay = (props) => {
  const { onClick } = props;
  
  return (
    <div className="time-of-day" alt="Time of Day Selection">
      <p>Time of Day</p>

      <input
        type="image"
        id="Morning"
        className="time__input"
        onClick={ onClick } 
        alt="Morning"
        title="Morning (5am ~ 11am)"
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888678/morning_rfereh.png" />

      <input
        type="image"
        id="Afternoon"
        className="time__input"
        onClick={ onClick }
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888682/afternoon_rdniws.png"
        alt="Afternoon"
        title="Afternoon (11am ~ 5pm)" />

      <input
        type="image"
        id="Evening"
        className="time__input"
        onClick={ onClick }
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1683356575/time3_yuu_wahh07.png"
        alt="Evening"
        title="Evening (5pm ~ 8pm)" />

      <input
        type="image"
        id="Night"
        className="time__input"
        onClick={ onClick } 
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888684/night_nubelk.png"
        alt="Night"
        title="Night (8pm ~ 5am)" />
    
    </div>
  )
};

export default TimeOfDay;