import React, { useState, useEffect } from 'react';
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import './Taglist.css';

const Taglist = () => {
  const { user } = UserAuth();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags();
    // console.log('🥸', tags);
  });
  
  // handles getting user's taglist
  async function getTags() {
    try {
      const fetchedTags = await axios.get(`/api/${user.uid}/tags`);
      setTags(fetchedTags.data);
    } catch (error) {
      // console.log('😁', error);
    }
  }
  
  return ( 
    <div>
      <h6>Your Tags</h6>
      {
        tags.map((tag) => {
          return (
            <span>{"   " + tag + "   " }</span>
          )
        })
      }
    </div>
  )
};

export default Taglist;
