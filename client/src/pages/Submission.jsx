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

  async function handleSubmission() {
    const submissionBody = { 
      uid: user.uid, 
      tagName: "lightning", 
      timesUsed: 0, 
      title: "Monday, Sonya's baby shower", 
      body: "There was a lightning storm and Luke got upset again", 
      timeOfDay: "Morning", 
      flagged: true 
    };

    const previousTimesUsed = await axios.get(`/api/${submissionBody.tagName}/timesUsed`);
    submissionBody.timesUsed = previousTimesUsed.data + 1;
    console.log('🤯', submissionBody);
    await axios.post('/api/submission', submissionBody);
    navigate('/entries');
  }

  return (
    <>
      <Header 
        className="header" 
        text="Submission"/>

      <div className="top">
        <Input placeholder="Title"/>
        <Input placeholder="Tag Search" />
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

        <textarea className="entry-body"></textarea>
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