import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

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
    <div className="@container flex flex-col justify-center items-center">
      <Header className="header" text="Meltdown Tracker" />
      <h3 className="text-xl m-5">Login</h3>

      <form className="flex flex-col gap-3" onSubmit={handleLogin}>
        <Input
          htmlFor="Email"
          type="email"
          className="w-50"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          htmlFor="Password"
          type="password"
          className="w-50"
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <SubmitButton text="Login" />
      </form>

      <p className="m-10">
        Don&apos;t have an account?
        <Link to="/signup"> Sign up! </Link>
      </p>

      <Footer />
    </div>
  );
}

export default Login;
