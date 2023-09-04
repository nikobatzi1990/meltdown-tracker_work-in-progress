import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./styles/Login.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from "../components/Button";

const Login = () => {

  const navigate = useNavigate();
  const { loginUser } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginUser(email, password);
      navigate('/home');

    } catch (error) {
      console.log("🧿", error);
    }
  }

  return (
    <div className="login">
      <Header className = "header login-header" text = "Meltdown Tracker"/>

      <div className="inputs">
        <Input 
          htmlFor = "Email"
          type="email"
          className = "input login-input"
          placeholder = "Enter your email here"
          value = { email }
          onChange = {(e) => {
            setEmail(e.target.value);
          }} />

        <Input 
          htmlFor = "Password"
          type="password"
          className = "input login-input"
          placeholder = "Enter your password here"
          value = { password }
          onChange = {(e) => {
            setPassword(e.target.value);
          }} 
        />

        <Button 
          className = "button"
          type = "submit"
          text="Login"
          onClick = { handleLogin }
        />

        <p>
          Don't have an account? 
          <Link to = "/SignUp"> Sign up! </Link>
        </p>
      </div>
      
      <Footer className = "login-footer" text = "© 2023 Meltown Tracker"/>
    </div>
  );
};

export default Login;