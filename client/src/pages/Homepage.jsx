import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from "../components/Button";

const Homepage = () => {
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    await axios.post('/api/logout');
    navigate('/');
  }
  return (
    <>
      <Header className = "header" text = "Homepage"/>
      <Button 
        text="Logout"
        onClick={ handleLogout } />

      <Footer />
    </>
  )
}

export default Homepage;