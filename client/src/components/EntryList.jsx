import React, { useState, useEffect } from 'react';
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import './EntryList.css';

const EntryList = () => {
  const { user } = UserAuth();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries();
    // console.log('🤬', entries);
  });

  // handles getting user's entries
  async function getEntries() {
    try {
      const fetchedEntries = await axios.get(`/api/${user.uid}/entries`)
      setEntries(fetchedEntries.data);
    } catch (error) {
      console.log('👹', error);
    }
  }

  return (
    <div>
      {
        entries.map((entry) => {
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

