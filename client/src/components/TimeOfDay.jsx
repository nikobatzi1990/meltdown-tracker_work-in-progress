import React from "react";
import "./TimeOfDay.css";

const TimeOfDay = (props) => {
  const { onClick } = props;
 
  return (
    <div className="time-of-day">
      <p>Time of Day</p>
      <img
        className="Morning"
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888678/morning_rfereh.png" 
        alt="a bird and the morning sky"
        onClick={ onClick } 
        title="Morning (5am ~ 11am)" />

      <img 
        className="Afternoon"
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888682/afternoon_rdniws.png"
        alt="the sunny afternoon sky"
        onClick={ onClick } 
        title="Afternoon (11am ~ 5pm)" />
      
      <img 
        className="Evening"
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1683356575/time3_yuu_wahh07.png"
        alt="the orange, evening sky"
        onClick={ onClick } 
        title="Evening (5pm ~ 8pm)" />

      <img 
        className="Night"
        src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888684/night_nubelk.png"
        alt="the night sky"
        onClick={ onClick } 
        title="Night (8pm ~ 5am)" />
    </div>
  )
};

export default TimeOfDay;