import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Submission.css";
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

  const submissionData = { 
    uid: user.uid, 
    tagName: "", 
    timesUsed: 0, 
    title: title, 
    body: "", 
    timeOfDay: "", 
    flagged: true 
  };

  const handleTitleInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setTitle(value);
    submissionData.title = value;
  }

  const handleTextBody = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setBody(value);
    submissionData.body = value;
  }

  const handleTagInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setTag(value);
    submissionData.tagName = value;
  }

  async function handleSubmission(event) {
    event.preventDefault();
    const previousTimesUsed = await axios.get(`/api/${submissionData.tagName}/timesUsed`);
    submissionData.timesUsed = previousTimesUsed.data + 1;
    // console.log('🤯', submissionBody);
    await axios.post('/api/submission', submissionData);
    navigate('/entries');
  }

  return (
    <>
      <Header 
        className="header" 
        text="Submission"/>

      <div className="top">
        <Input 
          placeholder="Title"
          value={ title }
          onChange={ handleTitleInput }/>

        <Input 
          placeholder="Tags"
          value={ tag } />
      </div>

      <div className="center">
        <div className="time-of-day">Time of Day
          <figure>
            <img src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888678/morning_rfereh.png" />
            <figcaption>Morning</figcaption>
          </figure>
          <figure>
            <img src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888682/afternoon_rdniws.png" />
            <figcaption>Afternoon</figcaption>
          </figure>
          <figure>
            <img src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1681888684/night_nubelk.png" />
            <figcaption>Night</figcaption>
          </figure>
        </div>

        <textarea 
          className="entry-body"
          placeholder="Type your entry here!"
          value = { body }
          cols="60" 
          rows="10" 
          onChange={ handleTextBody }>
        </textarea>
      </div>

      <Button 
        text="Submit" 
        onClick = { handleSubmission } />
      <Footer 
        className="footer" 
        text="© 2023 Meltown Tracker"/>
    </>
  );
};

export default Submission;