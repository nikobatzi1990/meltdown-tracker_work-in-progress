import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/EditSubmission.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const EditSubmission = () => {
  const navigate = useNavigate();
  const entryId = useParams();

  const [entry, setEntry] = useState({});

  useEffect(() => {
    getEntry();
    console.log(entry);
  }, []);

  const getEntry = async () => {
    const fetchedEntry = await axios.get(`/api/entries/entry/${entryId.entryId}`);
    setEntry(fetchedEntry.data);
  }

  return (
    <>
      <Header className="header" text = "Meltdown Tracker"/>
      <Footer className="footer" text = "© 2023 Meltown Tracker"/>
    </>
  );
}

export default EditSubmission;