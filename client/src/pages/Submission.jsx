import React, { useState, useEffect } from "react";
import "./Submission.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";

const Submission = () => {

  return (
    <>
      <Header className="header" text="Submission"/>

      <div className="top">
        <Input placeholder="Title"/>
        <Input placeholder="Tag Search" />
      </div>

      <div className="center">
        <div className="time-of-day">Time of Day</div>
        <textarea className="entry-body"></textarea>

      </div>

      <Button text="Submit" />
      <Footer className="footer" text="© 2023 Meltown Tracker"/>
    </>
  );
};

export default Submission;