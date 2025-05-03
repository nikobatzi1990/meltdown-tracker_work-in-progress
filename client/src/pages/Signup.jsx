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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await createUser(email, password);
      navigate("/home");
    } catch (error) {
      console.log("🤡", error);
    }
  };

  return (
    <div className="@container flex flex-col">
      <Header text="Meltdown Tracker" />

      <form
        className="flex flex-col justify-center items-center gap-3"
        onSubmit={handleSignup}
      >
        <h3 className="text-xl m-5">Sign Up</h3>

        <Input
          id="emailInput"
          className="w-50"
          labelText="Email"
          type="email"
          placeholder="youremail@domain.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          id="passwordInput"
          className="w-50"
          labelText="Password"
          type="password"
          placeholder="your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <SubmitButton text="Sign Up" />

        <p className="m-10">
          Already have an account?
          <Link to="/"> Log In! </Link>
        </p>
      </form>

      <Footer />
    </div>
  );
}

export default Signup;
