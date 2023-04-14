import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from "../components/Button";

const Homepage = () => {
  return (
    <>
      <Header className = "header" text = "Homepage"/>
      <Footer />
    </>
  )
}

export default Homepage;