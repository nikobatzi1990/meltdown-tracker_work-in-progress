import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import ExclamationPoint from "./ExclamationPoint";
import Button from "./Button";

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
    <div className="w-50 flex flex-col justify-center items-center gap-3">
      <h3 className="text-xl m-5">Entries</h3>
      {entries.length > 0
        ? entries.map((entry) => (
            <a
              key={entry.id}
              href={`/entry/${entry.id}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/entry/${entry.id}`);
              }}
            >
              <div className="flex items-center gap-3">
                {entry.flagged && <ExclamationPoint isFlagged="true" />}
                <span className="text-lg">{entry.title}</span>
              </div>
            </a>
          ))
        : "Loading..."}
      <Button
        text="Add new entry"
        onClick={() => {
          navigate("/submission");
        }}
      />
    </div>
  );
}

export default EntryList;
