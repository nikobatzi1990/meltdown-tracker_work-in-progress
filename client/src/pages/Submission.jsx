import React, { useState } from "react";
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
import TextEditor from "../components/TextEditor";

function Submission() {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    uid: user.uid,
    title: "",
    body: "",
    tagName: "",
    timesUsed: 1,
    timeOfDay: "morning",
    intensity: "1",
    flagged: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleFlag = () => {
    setForm((prev) => ({ ...prev, flagged: !prev.flagged }));
  };

  const handleNewTag = async () => {
    if (form.tagName) {
      try {
        // Check if the tag already exists
        const response = await axios.get(`/api/${user.uid}/tags`);
        // If tag exists, update timesUsed
        if (response.data.includes(form.tagName)) {
          const previousTimesUsed = await axios.get(
            `/api/tags/${form.tagName}/timesUsed`,
          );
          form.timesUsed = Number(previousTimesUsed.data) + 1;
          // If tag does not exist, create a new one
        } else {
          await axios.post("/api/tags/newTag", {
            tagName: form.tagName,
            uid: user.uid,
            timesUsed: form.timesUsed,
          });
        }
      } catch (err) {
        console.error("🐷: ", err);
      }
    }
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      await handleNewTag();
      await axios.post("/api/entries/submission", form);
      console.log("Form submitted successfully");
    } catch (err) {
      console.error("📦 Error: ", err);
    }
    navigate("/home");
  };

  return (
    <div className="@container">
      <Header text="Meltdown Tracker" />

      <form
        method="post"
        onSubmit={handleSubmission}
        className="overflow-y-auto"
      >
        <TimeOfDay onChange={handleChange} timeOfDay={form.timeOfDay} />
        <IntensityLevel onChange={handleChange} intensity={form.intensity} />

        <div>
          <div className="flex gap-5">
            <ExclamationPoint onClick={toggleFlag} isFlagged={form.flagged} />

            <Input
              className=""
              placeholder="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />

            <Input
              className=""
              placeholder="Tag"
              name="tagName"
              value={form.tagName}
              onChange={handleChange}
            />
          </div>

          <TextEditor />

          {/* <textarea
            className=""
            placeholder="Type your entry here!"
            name="body"
            value={form.body}
            cols="50"
            rows="20"
            onChange={handleChange}
          /> */}

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
