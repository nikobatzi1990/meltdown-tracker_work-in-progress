import React, { useState, useEffect } from 'react';
import './Entries.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Button from '../components/Button';
import Tags from '../components/Tags';

const Entries = () => {

  return (
    <>
      <Header className='header' text='All Entries'/>

      <Tags className='tag-wrapper' />

      <div className='entries-wrapper'>Your Entries
        
      </div>
      <Footer 
        className='footer' 
        text='© 2023 Meltown Tracker' />
    </>
  );
};

export default Entries;