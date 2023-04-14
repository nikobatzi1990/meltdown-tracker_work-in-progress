import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from "../components/Button"

const Signup = () => {

  const navigate = useNavigate();
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
    await axios.post('/api/signup', newUserInfo);
    navigate('/home');
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
      <p>
        Already have an account? <Link to = "/Login"> Login! </Link>
      </p>
      <Footer className = "footer" text = "© 2023 Meltown Tracker"/>
    </>
  );
};

export default Signup;