import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Login.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from "../components/Button";

const Login = () => {

  const navigate = useNavigate();
  const { loginUser, user } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginUser(email, password);
      console.log(`${user} is logged in!`)
      navigate('/home');

    } catch (error) {
      console.log("🧿", error);
    }
  }

  return (
    <div className="login">
      <Header className = "header" text = "Login"/>

      <div className="inputs">
        <Input 
          htmlFor = "Email"
          className = "login-input"
          placeholder = "Enter your email here"
          value = { email }
          onChange = {(e) => {
            setEmail(e.target.value);
          }} />

        <Input 
          htmlFor = "Password"
          className = "login-input"
          placeholder = "Enter your password here"
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

        <p>
          Don't have an account? 
          <Link to = "/SignUp"> Sign up! </Link>
        </p>
      </div>
      
      <Footer className = "footer" text = "© 2023 Meltown Tracker"/>
    </div>
  );
};

export default Login;