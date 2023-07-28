import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Submission.css";
import "./Icons.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";

const Submission = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const [time, setTime] = useState("");
  const [isFlagged, setIsFlagged] = useState(false);

  const submissionData = { 
    uid: user.uid, 
    tagName: tag, 
    timesUsed: 0, 
    title: title, 
    body: body, 
    timeOfDay: time, 
    flagged: isFlagged 
  };

  const handleTitleInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setTitle(value);
  }

  const handleTextBody = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setBody(value);
  }

  const handleTagInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setTag(value);
  }

  const handleTimeOfDay = (event) => {
    event.preventDefault();
    const value = event.target.className;
    setTime(value);
  }

  const handleFlag = (event) => {
    event.preventDefault();
    if (isFlagged === false) {
      event.target.className = "toggled material-symbols-outlined"
      setIsFlagged(true);
    } else {
      event.target.className = "light-bulb material-symbols-outlined"
      setIsFlagged(false);
    }
  }

  async function handleSubmission(event) {
    event.preventDefault();
    const previousTimesUsed = await axios.get(`/api/tags/${submissionData.tagName}/timesUsed`);
    submissionData.timesUsed = Number(previousTimesUsed.data) + 1;
    await axios.post('/api/entries/submission', submissionData);
    navigate('/entries');
  }

  return (
    <>
      <Header 
        className="header entries-header" 
        text="Meltdown Tracker"/>

      <div className="main-body">
        <div className="time-of-day">
          <p>Time of Day</p>
            <img
              className="Morning"
              src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888678/morning_rfereh.png" 
              alt="a bird and the morning sky"
              onClick={ handleTimeOfDay } 
              title="Morning (5am ~ 11am)" />

            <img 
              className="Afternoon"
              src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888682/afternoon_rdniws.png"
              alt="the sunny afternoon sky"
              onClick={ handleTimeOfDay } 
              title="Afternoon (11am ~ 5pm)"/>
            
            <img 
              className="Evening"
              src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1683356575/time3_yuu_wahh07.png"
              alt="the orange, evening sky"
              onClick={ handleTimeOfDay }
              title="Evening (5pm ~ 8pm)" />

            <img 
              className="Night"
              src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888684/night_nubelk.png"
              alt="the night sky"
              onClick={ handleTimeOfDay } 
              title="Night (8pm ~ 5am)" />

        </div>

        <div className="submission">
          <div className="top">


            <Button
              title="Was this a significant event?" 
              className = "light-bulb material-symbols-outlined"
              text= { <span>emoji_objects</span> }
              onClick = { handleFlag } />

            <Input 
              className="input title-input"
              placeholder="Title"
              value={ title }
              onChange={ handleTitleInput } />

            <Input 
              className="input"
              placeholder="Tag"
              value={ tag }
              onChange={ handleTagInput } />
          </div>
          
          <textarea 
            className="entry-body"
            placeholder="Type your entry here!"
            value = { body }
            cols="60" 
            rows="30" 
            onChange={ handleTextBody }>
          </textarea>

          <div className="submission__buttons">
            <Button 
              className="button"
              text="Submit" 
              onClick = { handleSubmission } />

            <Button 
              className="button"
              text="Back to Entries" 
              onClick = { () => {navigate('/entries')} } />
          </div>
        </div>
      </div>

      <Footer 
      className="footer" 
      text="© 2023 Meltown Tracker"/>
    </>
  );
};

export default Submission;