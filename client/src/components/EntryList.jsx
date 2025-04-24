import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import LightBulb from "./LightBulb";
import "./styles/EntryList.css";

function EntryList() {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);

  const handleEntries = async () => {
    try {
      const fetchedEntries = await axios.get(`/api/${user.uid}/entries`);
      setEntries(fetchedEntries.data);
    } catch (error) {
      alert("👹", error);
    }
  };

  useEffect(() => {
    handleEntries();
  }, [user.uid]);

  return (
    <div>
      {entries.length > 0
        ? entries.map((entry) => (
            <div
              key={entry.id}
              className="entries"
              onClick={() => {
                navigate(`/entry/${entry.id}`);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate(`/entry/${entry.id}`);
                }
              }}
            >
              {entry.flagged ? (
                <LightBulb
                  className="filled material-symbols-outlined"
                  title="This was a significant event!"
                  alt="Significant Event"
                />
              ) : (
                <></>
              )}
              <span>{entry.title}</span>
              <p>{entry.body}</p>
            </div>
          ))
        : "Loading..."}
    </div>
  );
}

export default EntryList;
