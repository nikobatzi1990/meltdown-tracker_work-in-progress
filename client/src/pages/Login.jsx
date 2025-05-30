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
    <div className="@container flex flex-col">
      <Header />

      <form
        className="flex flex-col justify-center items-center gap-3"
        onSubmit={handleLogin}
      >
        <h3 className="text-xl m-5">Login</h3>
        <Input
          id="emailInput"
          className="w-60 p-1 border-1 rounded-md"
          labelText="Email"
          type="email"
          placeholder="Enter your email here"
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
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <SubmitButton
          text="Login"
          className="p-2 cursor-pointer border-none rounded-md bg-sky-900 text-white"
        />

        <p className="m-10">
          Don&apos;t have an account?
          <Link to="/signup" className="text-blue-700 hover:underline">
            {" "}
            Sign up!
          </Link>
        </p>
      </form>

      <Footer />
    </div>
  );
}

export default Login;
