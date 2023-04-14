import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from "../components/Button"

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    const newUserInfo = {
      username: username,
      email: email,
      password: password,
      timestamp: new Date()
    }
    const newUser = await axios.post('/api/signup', newUserInfo);
  }

  return (
    <>
      <Header className = "header" text = "Signup"/>

      <div className="signup">
        <Input 
          htmlFor = "Username"
          className = "input"
          placeholder = "your nickname"
          value = { username }
          onChange = {(e) => {
            setUsername(e.target.value);
          }} />
        <Input 
          htmlFor = "Email"
          className = "input"
          placeholder = "youremail@domain.com"
          value = { email }
          onChange = {(e) => {
            setEmail(e.target.value);
          }} />

        <Input 
          htmlFor = "Password"
          className = "input"
          placeholder = "your password"
          value = { password }
          onChange = {(e) => {
            setPassword(e.target.value);
          }} />

          <Button 
          className = "submit"
          type = "submit"
          text ="Submit"
          onClick = { handleSignup }
          />
      </div>
        <p>
          Already have an account? 
          <Link to = "/"> Log In! </Link>
        </p>
      <Footer />
    </>
  );
};

export default Signup;