import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import ExclamationPoint from "./ExclamationPoint";

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
            <a
              key={entry.id}
              href={`/entry/${entry.id}`}
              className="entries"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/entry/${entry.id}`);
              }}
            >
              {entry.flagged ? (
                <ExclamationPoint
                // className="filled material-symbols-outlined"
                // title="This was a significant event!"
                // alt="Significant Event"
                />
              ) : (
                <div />
              )}
              <span>{entry.title}</span>
            </a>
          ))
        : "Loading..."}
    </div>
  );
}

export default EntryList;
