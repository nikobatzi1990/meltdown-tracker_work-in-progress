import React, { useState, useEffect } from 'react';
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import './Taglist.css';

const Taglist = (props) => {
const  { onClick }  = props;
  const { user } = UserAuth();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags();
    // console.log('🥸', tags);
  });
  
  async function getTags() {
    try {
      const fetchedTags = await axios.get(`/api/${user.uid}/tags`);
      setTags(fetchedTags.data);
    } catch (error) {
      console.log('😁', error);
    }
  }

  async function clickTag (event) {
    event.preventDefault();
    let clickedTag = event.target.innerText;
    try {
      const fetchedPosts = await axios.get(`/api/entries/${clickedTag}`)
      console.log('👅', fetchedPosts.data);
    } catch (error) {
      console.log('💋', error);
    }
  }

  return ( 
    <div className='tags'>
      {
        tags.map((tag) => {
          return (
            <span 
              value={ tag }
              className="tag"
              onClick = { clickTag } >{"   " + tag + "   " }</span>
          )
        })
      }
    </div>
  )
};

export default Taglist;
