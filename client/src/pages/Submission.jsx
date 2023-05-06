import React, { useState } from "react";
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

  const submissionData = { 
    uid: user.uid, 
    tagName: tag, 
    timesUsed: 0, 
    title: title, 
    body: body, 
    timeOfDay: time, 
    flagged: false 
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
    const value = event.target.nextElementSibling.innerText;
    setTime(value);
  }

  async function handleSubmission(event) {
    event.preventDefault();
    const previousTimesUsed = await axios.get(`/api/${submissionData.tagName}/timesUsed`);
    submissionData.timesUsed = Number(previousTimesUsed.data) + 1;
    await axios.post('/api/submission', submissionData);
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
          <figure>
            <img 
              src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888678/morning_rfereh.png" 
              alt="a bird and the morning sky"
              onClick={ handleTimeOfDay } />
            <figcaption>Morning</figcaption>
          </figure>
          <figure>
            <img 
              src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888682/afternoon_rdniws.png"
              alt="the sunny afternoon sky"
              onClick={ handleTimeOfDay } />
            <figcaption>Afternoon</figcaption>
          </figure>
          <figure >
            <img 
              src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888684/night_nubelk.png"
              alt="the night sky"
              onClick={ handleTimeOfDay } />
            <figcaption>Night</figcaption>
          </figure>
        </div>

        <div className="submission">
          <div className="top">
            <div className="light-bulb">
              <span className="material-symbols-outlined">emoji_objects</span>
              <img></img>
            </div>

            <Input 
              className="input title-input"
              placeholder="Title"
              value={ title }
              onChange={ handleTitleInput }/>

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

          <Button 
            className="button"
            text="Submit" 
            onClick = { handleSubmission } />
        </div>
      </div>

      <Footer 
      className="footer" 
      text="© 2023 Meltown Tracker"/>
    </>
  );
};

export default Submission;