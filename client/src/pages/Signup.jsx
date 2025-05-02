import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

function Signup() {
  const navigate = useNavigate();
  const { createUser } = UserAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await createUser(username, email, password);
      navigate("/home");
    } catch (error) {
      console.log("🤡", error);
    }
  };

  return (
    <div className="@container flex flex-col justify-center items-center">
      <Header className="header" text="Meltdown Tracker" />
      <h3 className="text-xl m-5">Sign Up</h3>

      <form className="flex flex-col gap-3" onSubmit={handleSignup}>
        <Input
          htmlFor="Username"
          type="username"
          className="signup-input"
          placeholder="your nickname"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <Input
          htmlFor="Email"
          type="email"
          className="signup-input"
          placeholder="youremail@domain.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          htmlFor="Password"
          type="password"
          className="signup-input"
          placeholder="your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <SubmitButton text="Sign Up" />
      </form>

      <p>
        Already have an account?
        <Link to="/"> Log In! </Link>
      </p>

      <Footer />
    </div>
  );
}

export default Signup;
