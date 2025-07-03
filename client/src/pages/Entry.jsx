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
          }),
        );
      } catch (error) {
        console.alert("👁️", error);
      }
    };
    fetchEntry();
  }, [entryId]);

  const handlePostDeletion = async () => {
    await axios.delete(`/api/entries/${entryId.entryId}/deletion`);
    navigate("/home");
  };

  return (
    <div className="@container">
      <Header />

      <Button
        className="m-3 cursor-pointer rounded-md"
        text="Back to Homepage"
        onClick={() => {
          navigate("/home");
        }}
      />

      <div className="grid grid-cols-1 gap-4 p-5">
        <div className="flex gap-5">
          {entry.flagged && <ExclamationPoint isFlagged="true" />}
          <h3 className="text-entry-title">{entry.title}</h3>
          <div className="flex gap-5">
            <button
              className="cursor-pointer"
              type="button"
              onClick={() => {
                navigate(`/entry/${entryId.entryId}/edit`);
              }}
            >
              <PencilIcon className="h-6 w-6 text-gray-500" />
            </button>

            <button
              className="cursor-pointer"
              type="button"
              onClick={handlePostDeletion}
            >
              <TrashIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
        <div className="flex gap-10">
          <p>Time of Day: {entry.time_of_day}</p>
          <p>Intensity: {entry.intensity}</p>
          <p>{date}</p>
        </div>
        <p className="mx-10">{entry.body}</p>
        <p>Tags: {entry.tag_name} </p>
      </div>

      <Footer />
    </div>
  );
}

export default Entry;
