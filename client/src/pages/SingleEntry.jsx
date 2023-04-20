import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./SingleEntry.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Entry = () => {
  const [entry, setEntry] = useState();
  let entryId = useParams();

  useEffect(() => {
    getEntry();
    console.log('👀', entry);
  });

  async function getEntry() {
    try {
      // console.log('💋', entryId.entryId);
      const fetchedEntry = await axios.get(`/api/${entryId.entryId}/entry`)
      // console.log('🧠', fetchedEntry);
      setEntry(fetchedEntry.data);
    } catch (error) {
      console.log('👁️', error);
    }
  }

  return (
    <>
      <Header className = "header" text = "Single Entry"/>

      <Footer className = "footer" text = "© 2023 Meltown Tracker"/>
    </>
  );
};

export default Entry;