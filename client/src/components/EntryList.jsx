import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import './styles/EntryList.css';
import LightBulb from './LightBulb';

const EntryList = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    handleEntries();
  }, [user.uid]);

  const handleEntries = async () => {
    try {
      const fetchedEntries = await axios.get(`/api/${user.uid}/entries`);
      setEntries(fetchedEntries.data);
    } catch (error) {
      console.log('👹', error);
    }
  }

  return (
    <div>
      {(entries.length > 0)
        ? entries.map((entry) => (
            <div 
              key={ entry.id } 
              className="entries" 
              onClick={ () => {navigate(`/entry/${entry.id}`)} } >
                {
                  entry.flagged
                  ? (<LightBulb className="filled material-symbols-outlined" title="This was a significant event!" alt="Significant Event"/>)
                  : <></>
                }
                <span>{ entry.title }</span>
                <p>{ entry.body }</p>
            </div>
          ))
          : "Loading..."
      }
    </div>
  )
}

export default EntryList;