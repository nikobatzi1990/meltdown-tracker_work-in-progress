import React, { useState, useEffect } from "react";
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
        />
      </div>
      <p>
        Don't have an account? <Link to = "/Signup"> Sign up! </Link>
      </p>
      <Footer />
    </>
  );
};

export default Login;