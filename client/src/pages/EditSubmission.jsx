import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import './styles/EditSubmission.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import TimeOfDay from "../components/TimeOfDay";
import LightBulb from "../components/LightBulb";

const EditSubmission = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const entryId = useParams();

  const getEntry = async () => {
  const fetchedEntry = await axios.get(`/api/entries/entry/${entryId.entryId}`);
  setEntry(fetchedEntry.data);
  }

  useEffect(() => {
    getEntry();
    setTitle(`${entry.title}`);
    setBody(`${entry.body}`);
    setTag(`${entry.tag_name}`);
    setTime(`${entry.time_of_day}`);
    setIsFlagged(`${entry.flagged}`);
  }, []);

  const [entry, setEntry] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const [time, setTime] = useState("");
  const [isFlagged, setIsFlagged] = useState(false);

  const editedData = {
    uid: user.uid, 
    tagName: tag, 
    title: title, 
    body: body, 
    timeOfDay: time, 
    flagged: isFlagged,
  };


  return (
    <>
      <Header className="header" text = "Meltdown Tracker"/>

  
      <Footer className="footer" text = "© 2023 Meltown Tracker"/>
    </>
  );
}

export default EditSubmission;