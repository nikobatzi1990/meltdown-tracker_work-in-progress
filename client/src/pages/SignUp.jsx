import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from "../components/Button"

const Signup = () => {

  // const navigate = useNavigate();
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
    // console.log("🤌", newUser);
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
          text="Submit"
          onClick= { handleSignup }
          />
      </div>

      <Footer />
    </>
  );
};

export default Signup;