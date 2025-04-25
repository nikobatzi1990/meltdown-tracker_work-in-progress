import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Taglist from "../components/Taglist";
import EntryList from "../components/EntryList";

function Homepage() {
  const { logoutUser, user } = UserAuth();
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Header className="header" text="Meltdown Tracker" />

      <div className="greeting">
        <p>Hello, {user.email}! </p>
        <Button
          text="Logout"
          onClick={() => {
            logoutUser();
            navigate("/");
          }}
        />
      </div>

      <div className="main">
        <Taglist className="tag-wrapper" />
        <EntryList />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
