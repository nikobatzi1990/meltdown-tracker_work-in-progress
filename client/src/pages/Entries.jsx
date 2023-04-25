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
      <Header className='header entries-header' text='Meltdown Tracker'/>
      
      <div className="main">

        <Tags className='tag-wrapper entries-tags' />

        <div className='entries-wrapper'>
          <EntryList />
        </div>

      </div>

      <Footer 
        className='footer' 
        text='© 2023 Meltown Tracker' />
    </>
  );
};

export default Entries;