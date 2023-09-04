import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/EditSubmission.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const EditSubmission = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header className="header"/>
      <Footer className="footer"/>
    </>
  );
}

export default EditSubmission;