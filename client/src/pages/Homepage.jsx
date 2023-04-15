import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Homepage.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from "../components/Button";
import Tags from "../components/Tags";

const Homepage = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  // useEffect (() => {
  //   console.log('🏀', user);
  // }, []);

  const handleLogout = async (event) => {
    event.preventDefault();
    await axios.post('/api/logout');
    navigate('/');
  }
  return (
    <>
      <h6>Hello, { user.email }! </h6>
      <Header className = "header" text = "Homepage"/>

      <div className = "main">
        <Tags className = "tag-wrapper" />

        <Button 
          text = "See all Entries" />

        <Button 
          text = "Write New" />
      </div>

      <Button 
          text="Logout"
          onClick={ handleLogout } />

      <Footer className = "footer" text = "© 2023 Meltown Tracker"/>
    </>
  )
}

export default Homepage;