import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();
  const { loginUser } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginUser(email, password);
      navigate("/home");
    } catch (error) {
      alert("🧿", error);
    }
  };

  return (
    <div className="login">
      <Header className="header login-header" text="Meltdown Tracker" />

      <div className="inputs">
        <Input
          htmlFor="Email"
          type="email"
          className="input login-input"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          htmlFor="Password"
          type="password"
          className="input login-input"
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button type="submit" text="Login" onClick={handleLogin} />

        <p>
          Don&apos;t have an account?
          <Link to="/SignUp"> Sign up! </Link>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
