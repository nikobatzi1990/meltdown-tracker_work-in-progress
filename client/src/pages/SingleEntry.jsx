import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./SingleEntry.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import LightBulb from '../components/LightBulb';

const Entry = () => {
  const [entry, setEntry] = useState({});
  const [date, setDate] = useState('');
  let entryId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getEntry();
  }, []);

  async function getEntry() {
    try {
      const fetchedEntry = await axios.get(`/api/entries/entry/${entryId.entryId}`);
      setEntry(fetchedEntry.data);
      setDate(new Date(fetchedEntry.data.created_at)
        .toLocaleDateString(
          'en-gb',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: "numeric", 
            minute: "numeric", 
            hour12: true,
            timeZoneName: "long"
          })
        );
    } catch (error) {
      console.log('👁️', error);
    }
  }

  const handlePostDeletion = async () => {
    await axios.delete(`/api/entries/${entryId.entryId}/deletion`);
    navigate('/entries');
  }

  return (
    <>
      <Header className = "header entries-header" text = "Meltdown Tracker"/>
      
      
      <div className="entry">
        <div className="entry-time">{ entry.time_of_day }</div>
        <div className="entry-main">
          <div className="entry-top">
            <p>{ date }</p>
            {
              entry.flagged
              ? (<LightBulb className="filled material-symbols-outlined" title="This was a significant event!" alt="Significant Event"/>)
              : <></>
            }
            <h3 className="entry-title">{ entry.title }</h3>
            <p>Tags: { entry.tag_name } </p>
          </div>
          <p className="entry-body">{ entry.body }</p>
        </div>

        <Button 
          className="button"
          text="Back to Entries" 
          onClick = {() => {
            navigate('/entries') }}/>

        <Button 
          className = "edit"
          title="Edit Post"
          text= { <span className="material-symbols-outlined">edit</span> } />

        <Button 
          className = "trash"
          title="Delete Post"
          text= { <span className="material-symbols-outlined">delete</span> } 
          onClick={ handlePostDeletion }/> 

      </div>

      <Footer className = "footer" text = "© 2023 Meltown Tracker"/>
    </>
  );
};

export default Entry;