import React, { useState, useEffect } from "react";
import "./Submission.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Submission = () => {

  return (
    <>
      <Header className = "header" text = "Submission"/>
      <Footer className = "footer" text = "© 2023 Meltown Tracker"/>
    </>
  );
};

export default Submission;