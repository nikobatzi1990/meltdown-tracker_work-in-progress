import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Entries.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Taglist from '../components/Taglist';
import EntryList from '../components/EntryList';
import Button from '../components/Button';

const Entries = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Header className='header entries-header' text="Meltdown Tracker"/>

      <div className='root'>
        <div className='main'>
          <Taglist className='tag-wrapper entries-tags' />

          <div className='entries-wrapper'>
            <EntryList />

            <Button 
              className='new__entry button'
              text="Add New Entry"
              onClick = { () => {navigate('/submission')} } />
          </div>
        </div>
        
        <Button 
          className="homepage___button button"
          text="Homepage"
          onClick = { () => {navigate('/home')} }/>
      </div> 

      <Footer 
        className='footer' 
        text='© 2023 Meltown Tracker' />
    </>
  );
};

export default Entries;