import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./SingleEntry.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Entry = () => {
  // 1. state variables initialize 
  // 4. state updates during useEffect
  const [entry, setEntry] = useState({});
  let entryId = useParams();

  // 3. useEffect runs and updates state  
  useEffect(() => {
    getEntry();
    console.log('👀', entry);
  }, []);

  async function getEntry() {
    try {
      // console.log('💋', entryId.entryId);
      const fetchedEntry = await axios.get(`/api/${entryId.entryId}/entry`);
      // console.log('🧠', fetchedEntry);
      setEntry(fetchedEntry.data);
    } catch (error) {
      console.log('👁️', error);
    }
  }

  // 2. jsx components render initially  
  // 5. state updated; components tied to state re-render
  return (
    <>
      <Header className = "header" text = "Single Entry"/>
      <div>
        <h2>{ entry.title }</h2>
        <h4>{ entry.tags } </h4>
        <div>
          <div>{ entry.time_of_day }</div>
          <p>{ entry.body }</p>
        </div>

      </div>

      <Footer className = "footer" text = "© 2023 Meltown Tracker"/>
    </>
  );
};

export default Entry;