import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ExclamationPoint from "../components/ExclamationPoint";

function Entry() {
  const [entry, setEntry] = useState({});
  const [date, setDate] = useState("");
  const entryId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const { data } = await axios.get(
          `/api/entries/entry/${entryId.entryId}`,
        );
        setEntry(data);
        setDate(
          new Date(data.created_at).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timeZoneName: "long",
          }),
        );
        console.log("🎆", data);
      } catch (error) {
        console.alert("👁️", error);
      }
    };
    fetchEntry();
  }, [entryId]);

  useEffect(() => {
    console.log("🐸", entry);
  }, [entry]);

  const handlePostDeletion = async () => {
    await axios.delete(`/api/entries/${entryId.entryId}/deletion`);
    navigate("/home");
  };

  return (
    <>
      <Header text="Meltdown Tracker" />
      <p>Time of Day: {entry.time_of_day}</p>
      <p>Meltdown Intensity: {entry.intensity}</p>
      <p>{date}</p>
      {entry.flagged && <ExclamationPoint isFlagged="true" />}
      <h3 className="entry-title">{entry.title}</h3>
      <p>Tags: {entry.tag_name} </p>
      <p>{entry.body}</p>

      <button
        type="button"
        onClick={() => {
          navigate(`/entry/${entryId.entryId}/edit`);
        }}
      >
        <PencilIcon className="h-6 w-6 text-gray-500" />
      </button>

      <button type="button" onClick={handlePostDeletion}>
        <TrashIcon className="h-6 w-6 text-gray-500" />
      </button>

      <Button
        text="Back to Homepage"
        onClick={() => {
          navigate("/home");
        }}
      />

      <Footer />
    </>
  );
}

export default Entry;
