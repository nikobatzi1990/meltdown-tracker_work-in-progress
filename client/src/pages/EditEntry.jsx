import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import TimeOfDay from "../components/TimeOfDay";
import IntensityLevel from "../components/IntensityLevel";
import SubmitButton from "../components/SubmitButton";
import ExclamationPoint from "../components/ExclamationPoint";

function EditEntry() {
  const navigate = useNavigate();

  const entryId = useParams();
  // const [entry, setEntry] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const [time, setTime] = useState("");
  const [intensity, setIntensity] = useState("not specified");
  const [isFlagged, setIsFlagged] = useState(false);

  const editedData = {
    title,
    body,
    timeOfDay: time,
    flagged: isFlagged,
    intensity,
  };

  useEffect(() => {
    const fetchEntry = async () => {
      const { data } = await axios.get(`/api/entries/entry/${entryId.entryId}`);
      // setEntry(data);
      setTitle(data.title);
      setBody(data.body);
      setTag(data.tag_name);
      setTime(data.time_of_day);
      setIsFlagged(data.flagged);
      setIntensity(data.intensity);
    };
    fetchEntry();
  }, [entryId]);

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

  const handleSubmission = async () => {
    await axios.patch(`/api/entries/${entryId.entryId}/edit`, editedData);
    navigate("/");
  };

  return (
    <div className="@container">
      <Header className="header" text="Meltdown Tracker" />

      <form className="main-body" onSubmit={handleSubmission}>
        <TimeOfDay onClick={handleTimeOfDay} />
        <IntensityLevel onClick={handleIntensity} />

        <div className="submission">
          <div className="top">
            <ExclamationPoint
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
            className=""
            placeholder="Type your entry here!"
            value={body}
            cols="50"
            rows="10"
            onChange={handleTextBody}
          />

          <div className="submission__buttons">
            <SubmitButton />

            <Button
              text="Back to Homepage"
              onClick={() => {
                navigate("/home");
              }}
            />
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default EditEntry;
