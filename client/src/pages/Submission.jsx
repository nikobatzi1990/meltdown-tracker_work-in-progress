import React, { useState, useEffect } from "react";
// import axios from "axios";
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
  const [form, setForm] = useState({
    uid: user?.uid,
    timesUsed: 0,
    title: "",
    body: "",
    tag: "",
    timeOfDay: "morning",
    intensity: "1",
    isFlagged: false,
  });

  useEffect(() => {
    console.log("❤️", form);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleFlag = () => {
    setForm((prev) => ({ ...prev, isFlagged: !prev.isFlagged }));
  };

  // async function handleSubmission() {
  //   const previousTimesUsed = await axios.get(
  //     `/api/tags/${submissionData.tagName}/timesUsed`,
  //   );
  //   submissionData.timesUsed = Number(previousTimesUsed.data) + 1;
  //   await axios.post("/api/entries/submission", submissionData);
  //   navigate("/home");
  // }

  return (
    <div className="@container">
      <Header text="Meltdown Tracker" />

      <form method="post">
        <TimeOfDay onChange={handleChange} timeOfDay={form.timeOfDay} />
        <IntensityLevel onChange={handleChange} intensity={form.intensity} />

        <div>
          <div className="flex gap-5">
            <ExclamationPoint onClick={toggleFlag} isFlagged={form.isFlagged} />

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
              name="tag"
              value={form.tag}
              onChange={handleChange}
            />
          </div>

          <textarea
            className=""
            placeholder="Type your entry here!"
            name="body"
            value={form.body}
            cols="50"
            rows="20"
            onChange={handleChange}
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
