import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./SingleEntry.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Entry = () => {
  const [entry, setEntry] = useState({});
  let entryId = useParams();

  useEffect(() => {
    getEntry();
  }, []);

  async function getEntry(event) {
    try {
      const fetchedEntry = await axios.get(`/api/${entryId.entryId}/entry`);
      setEntry(fetchedEntry.data);
    } catch (error) {
      console.log('👁️', error);
    }
  }

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