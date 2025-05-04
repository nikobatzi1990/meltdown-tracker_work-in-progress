import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import TimeOfDay from "../components/TimeOfDay";
import IntensityLevel from "../components/IntensityLevel";
import SubmitButton from "../components/SubmitButton";
import ExclamationPoint from "../components/ExclamationPoint";

function Submission() {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const [time, setTime] = useState("morning");
  const [intensity, setIntensity] = useState("1");
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

  const handleTimeOfDay = (e) => {
    // event.preventDefault();
    const { value } = e.target;
    setTime(value);
  };

  const handleIntensity = (e) => {
    // event.preventDefault();
    const { value } = e.target;
    setIntensity(value);
  };

  const handleFlag = () => {
    setIsFlagged((prev) => !prev);
  };

  async function handleSubmission() {
    const previousTimesUsed = await axios.get(
      `/api/tags/${submissionData.tagName}/timesUsed`,
    );
    submissionData.timesUsed = Number(previousTimesUsed.data) + 1;
    await axios.post("/api/entries/submission", submissionData);
    navigate("/home");
  }

  return (
    <div className="@container">
      <Header text="Meltdown Tracker" />

      <form method="post" onSubmit={handleSubmission}>
        <TimeOfDay onChange={handleTimeOfDay} timeOfDay={time} />
        <IntensityLevel onChange={handleIntensity} intensity={intensity} />

        <div>
          <div className="flex gap-5">
            <ExclamationPoint onClick={handleFlag} isFlagged={isFlagged} />

            <Input
              className=""
              placeholder="Title"
              value={title}
              onChange={handleTitleInput}
            />

            <Input
              className=""
              placeholder="Tag"
              value={tag}
              onChange={handleTagInput}
            />
          </div>

          <textarea
            className=""
            placeholder="Type your entry here!"
            value={body}
            cols="50"
            rows="20"
            onChange={handleTextBody}
          />

          <SubmitButton />
        </div>
      </form>

      <Button
        text="Back to Homepage"
        onClick={() => {
          navigate("/home");
        }}
      />

      <Footer />
    </div>
  );
}

export default Submission;
