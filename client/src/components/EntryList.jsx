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
      console.log("👹", error);
    }
  };

  useEffect(() => {
    handleEntries();
  }, [user.uid]);

  return (
    <div className="grid grid-cols-1">
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
              <div className="grid grid-cols-2 gap-3">
                {entry.flagged && (
                  <ExclamationPoint isFlagged="true" className="row-span-1" />
                )}
                <span className="row-span-1">{entry.title}</span>
              </div>
            </a>
          ))
        : "Loading..."}
      <Button
        className="p-1 cursor-pointer border-none rounded-md bg-sky-900 text-white"
        text="Add new entry"
        onClick={() => {
          navigate("/submission");
        }}
      />
    </div>
  );
}

export default EntryList;
