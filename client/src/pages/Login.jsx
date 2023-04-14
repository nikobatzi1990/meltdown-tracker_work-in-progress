import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Login.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (event) => {
    event.preventDefault();
    const userInfo = {
      email: email,
      password: password,
    }
    await axios.post('/api/login', userInfo);
    navigate('/home');
  }

  return (
    <>
      <Header className = "header" text = "Login"/>

      <div>
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
          }} 
        />

        <Button 
          className = "submit"
          type = "submit"
          text="Login"
          onClick = { handleLogin }
        />
      </div>
      <p>
        Don't have an account? 
        <Link to = "/SignUp"> Sign up! </Link>
      </p>
      <Footer />
    </>
  );
};

export default Login;