import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./styles/Submission.css";
import "./styles/Icons.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import TimeOfDay from "../components/TimeOfDay";
import IntensityLevel from "../components/IntensityLevel";
import LightBulb from "../components/LightBulb";
import SubmitButton from "../components/SubmitButton";

function Submission() {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const [time, setTime] = useState("");
  const [intensity, setIntensity] = useState("not specified");
  const [isFlagged, setIsFlagged] = useState(false);

  const submissionData = {
    uid: user.uid,
    tagName: tag,
    timesUsed: 0,
    title,
    body,
    timeOfDay: time,
    flagged: isFlagged,
    intensity,
  };

  useEffect(() => {
    console.log("❤️", submissionData);
  }, [submissionData]);

  const handleTitleInput = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setTitle(value);
  };

  const handleTextBody = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setBody(value);
  };

  const handleTagInput = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setTag(value);
  };

  const handleTimeOfDay = (event) => {
    event.preventDefault();
    const value = event.target.id;
    setTime(value);
  };

  const handleIntensity = (event) => {
    event.preventDefault();
    const value = event.target.id;
    setIntensity(value);
  };

  const handleFlag = () => {
    setIsFlagged((prev) => !prev);
  };

  const handleClassname = () => {
    if (isFlagged) {
      return "filled material-symbols-outlined";
    }
    return "material-symbols-outlined";
  };

  async function handleSubmission() {
    const previousTimesUsed = await axios.get(
      `/api/tags/${submissionData.tagName}/timesUsed`,
    );
    submissionData.timesUsed = Number(previousTimesUsed.data) + 1;
    await axios.post("/api/entries/submission", submissionData);
    navigate("/entries");
  }

  return (
    <>
      <Header className="header entries-header" text="Meltdown Tracker" />

      <form className="main-body" onSubmit={handleSubmission}>
        <TimeOfDay onClick={handleTimeOfDay} />
        <IntensityLevel onClick={handleIntensity} />

        <div className="submission">
          <div className="top">
            <LightBulb
              className={handleClassname}
              onClick={handleFlag}
              title="Was this a significant event?"
            />

            <Input
              className="input title-input"
              placeholder="Title"
              value={title}
              onChange={handleTitleInput}
            />

            <Input
              className="input"
              placeholder="Tag"
              value={tag}
              onChange={handleTagInput}
            />
          </div>

          <textarea
            className="entry-body"
            placeholder="Type your entry here!"
            value={body}
            cols="60"
            rows="30"
            onChange={handleTextBody}
          />

          <div className="submission__buttons">
            <SubmitButton className="button" text="Submit" />

            <Button
              className="button"
              text="Back to Entries"
              onClick={() => {
                navigate("/entries");
              }}
            />
          </div>
        </div>
      </form>

      <Footer className="footer" text="© 2023 Meltown Tracker" />
    </>
  );
}

export default Submission;
