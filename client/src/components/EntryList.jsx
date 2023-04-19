import React, { useState, useEffect } from 'react';
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import './EntryList.css';

const EntryList = () => {
  const { user } = UserAuth();
  const [entries, setEntries] = useState({});

  useEffect(() => {
    getEntries();
    // console.log('🤬', Array.isArray(entries));
  });

  // handles getting user's entries
  async function getEntries() {
    try {
      const fetchedEntries = await axios.get(`/api/${user.uid}/entries`)
      setEntries(fetchedEntries.data);
      // console.log('🤢', fetchedEntries.data);
    } catch (error) {
      console.log('👹', error);
    }
  }

  return (
    <div>
      {
        entries.map((entry) => {
          console.log('😮‍💨', entry);
          return (
            <>
              <span>{ entry.title }</span>
              <p>{ entry.body }</p>
            </>
          )
        })
      }
    </div>
  )
}

export default EntryList;

