import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import './EntryList.css';

const EntryList = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries();
  }, []);

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
            <div onClick = {() => {
              navigate(`/entry/${entry.id}`)}}>
              <span>{ entry.title }</span>
              <p>{ entry.body }</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default EntryList;

