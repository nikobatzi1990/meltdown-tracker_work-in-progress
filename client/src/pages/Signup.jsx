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
      <Header />

      <form
        className="flex flex-col justify-center items-center gap-3"
        onSubmit={handleSignup}
      >
        <h3 className="text-xl m-5">Sign Up</h3>

        <Input
          id="emailInput"
          className="w-60 p-1 border-1 rounded-md"
          labelText="Email"
          type="email"
          placeholder="email-address@domain.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          id="passwordInput"
          className="w-60 p-1 border-1 rounded-md"
          labelText="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <SubmitButton
          text="Sign Up"
          className="p-2 cursor-pointer border-none rounded-md bg-sky-900 text-white"
        />

        <p className="m-10">
          Already have an account?
          <Link to="/" className="text-blue-700 hover:underline">
            {" "}
            Log In!
          </Link>
        </p>
      </form>

      <Footer />
    </div>
  );
}

export default Signup;
