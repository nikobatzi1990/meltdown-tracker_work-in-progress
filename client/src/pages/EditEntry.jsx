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

  const [form, setForm] = useState({
    title: "",
    body: "",
    tagName: "",
    timeOfDay: "",
    intensity: "",
    flagged: false,
  });

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const { data } = await axios.get(
          `/api/entries/entry/${entryId.entryId}`,
        );
        setForm({
          title: data.title,
          body: data.body,
          tagName: data.tag_name,
          timeOfDay: data.time_of_day,
          intensity: String(data.intensity),
          flagged: data.flagged,
        });
      } catch (err) {
        console.error("👵🏻", err);
      }
    };
    fetchEntry();
  }, [entryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleFlag = () => {
    setForm((prev) => ({ ...prev, flagged: !prev.flagged }));
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/entries/${entryId.entryId}/edit`, form);
    } catch (err) {
      console.error("🥸", err);
    }
    navigate("/home");
  };

  return (
    <div className="@container">
      <Header text="Meltdown Tracker" />

      <form onSubmit={handleSubmission}>
        <TimeOfDay onChange={handleChange} timeOfDay={form.timeOfDay} />
        <IntensityLevel onChange={handleChange} intensity={form.intensity} />

        <div>
          <div>
            <ExclamationPoint isFlagged={form.flagged} onClick={toggleFlag} />

            <Input
              placeholder="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />

            <Input
              placeholder="Tag"
              name="tagName"
              value={form.tagName}
              onChange={handleChange}
            />
          </div>

          <textarea
            className=""
            name="body"
            value={form.body}
            cols="50"
            rows="10"
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

export default EditEntry;
