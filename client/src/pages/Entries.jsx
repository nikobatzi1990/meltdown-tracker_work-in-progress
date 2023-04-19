import React from 'react';
import axios from 'axios';
import './Entries.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import EntryList from '../components/EntryList';

const Entries = () => {
  
  return (
    <>
      <Header className='header' text='All Entries'/>

      <Tags className='tag-wrapper' />

      <div className='entries-wrapper'>Your Entries

        <EntryList />

      </div>
      <Footer 
        className='footer' 
        text='© 2023 Meltown Tracker' />
    </>
  );
};

export default Entries;