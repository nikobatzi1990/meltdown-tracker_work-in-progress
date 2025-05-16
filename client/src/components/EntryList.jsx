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
    <div className="grid grid-cols-1 m-5 gap-3">
      <h3 className="text-xxl m-5 text-center">Entries</h3>
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
              <div className="grid grid-cols-4 gap-3 p-3 border-solid border-1 rounded-md cursor-pointer">
                {entry.flagged && (
                  <ExclamationPoint
                    isFlagged="true"
                    className="col-start-1 col-end-2 justify-self-end"
                  />
                )}
                <span className="text-lg col-start-2 col-end-5">
                  {entry.date} {entry.title}
                </span>
              </div>
            </a>
          ))
        : "Loading..."}
      <Button
        className="p-2 cursor-pointer border-none rounded-md bg-sky-900 text-white place-self-center"
        text="Add new entry"
        onClick={() => {
          navigate("/submission");
        }}
      />
    </div>
  );
}

export default EntryList;
