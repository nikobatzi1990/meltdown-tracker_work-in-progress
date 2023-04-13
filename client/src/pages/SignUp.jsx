import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Signup = () => {

  // const navigate = useNavigate();

  return (
    <>
      <Header className = "header" text = "Signup"/>
      <Footer />
    </>
  );
};

export default Signup;