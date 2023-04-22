import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Signup.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from "../components/Button"

const Signup = () => {

  const navigate = useNavigate();
  const { createUser } = UserAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await createUser (username, email, password);
      navigate('/home');

    } catch (error) {
      console.log("🤡", error);
    }
  }

  return (
    <div className="signup"> 
      <Header className = "header" text = "Signup"/>

      <div className="inputs">
        <Input 
          htmlFor = "Username"
          className = "signup-input"
          placeholder = "your nickname"
          value = { username }
          onChange = {(e) => {
            setUsername(e.target.value);
          }} />
        <Input 
          htmlFor = "Email"
          className = "signup-input"
          placeholder = "youremail@domain.com"
          value = { email }
          onChange = {(e) => {
            setEmail(e.target.value);
          }} />

        <Input 
          htmlFor = "Password"
          className = "signup-input"
          placeholder = "your password"
          value = { password }
          onChange = {(e) => {
            setPassword(e.target.value);
          }} />

          <Button 
          className = "button"
          type = "submit"
          text ="Submit"
          onClick = { handleSignup }
          />
        <p>
          Already have an account? 
          <Link to = "/"> Log In! </Link>
        </p>
      </div>
        
      <Footer className = "login-footer" text = "© 2023 Meltown Tracker"/>
    </div>
  );
};

export default Signup;
