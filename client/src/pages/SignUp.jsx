import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;