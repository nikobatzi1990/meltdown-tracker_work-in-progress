import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import './Entries.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Button from '../components/Button';
import Tags from '../components/Tags';
import EntryList from '../components/EntryList';

const Entries = () => {
  // const { user } = UserAuth();
  // const navigate = useNavigate();
  // const [entries, setEntries] = useState({});

  // useEffect(() => {
  //   getEntries();
  //   console.log('🤬', entries);
  // });

  // // handles getting user's entries
  // async function getEntries() {
  //   try {
  //     const fetchedEntries = await axios.get(`/api/${user.uid}/entries`)
  //     setEntries(fetchedEntries.data);
  //     // console.log('🤢', fetchedEntries.data);
  //   } catch (error) {
  //     console.log('👹', error);
  //   }
  // }

  return (
    <>
      <Header className='header' text='All Entries'/>

      <Tags className='tag-wrapper' />

      <div className='entries-wrapper'>Your Entries
        <EntryList />
        {/* {
          entries.map((entry) => {
            return (
              <>
                <span>{ entry.title }</span>
                <span>{ entry.body }</span>
              </>
            )
          })
        } */}
      </div>
      <Footer 
        className='footer' 
        text='© 2023 Meltown Tracker' />
    </>
  );
};

export default Entries;