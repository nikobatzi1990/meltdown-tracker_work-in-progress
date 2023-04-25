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

  async function getEntry() {
    try {
      const fetchedEntry = await axios.get(`/api/${entryId.entryId}/entry`);
      setEntry(fetchedEntry.data);
    } catch (error) {
      console.log('👁️', error);
    }
  }

  return (
    <>
      <Header className = "header entries-header" text = "Meltdown Tracker"/>
      
      <div className="entry">
        <div className="entry-time">{ entry.time_of_day }</div>
        <div className="entry-main">
          <div className="entry-top">
          <h3 className="entry-title">{ entry.title }</h3>
          <p>Tags: { entry.tag_name } </p>
        </div>
        <p className="entry-body">{ entry.body }</p>
        </div>
      </div>

      <Footer className = "footer" text = "© 2023 Meltown Tracker"/>
    </>
  );
};

export default Entry;