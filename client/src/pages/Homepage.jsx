import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Homepage.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from "../components/Button";
import Tags from "../components/Tags";

const Homepage = () => {
  const { user } = UserAuth();
  const { logoutUser } = UserAuth();
  const navigate = useNavigate();

  return (
    <div>
      <div className="greeting">
        <p>Hello, { user.email }! </p>
        <Button 
          className="button logout"
          text="Logout"
          onClick={() => {
            logoutUser();
            navigate('/');
          }} />
      </div>

      <Header className = "header homepage-header" text = "Meltdown Tracker"/>

      <div className = "main">
        <Tags className = "tag-wrapper" />

        <div className="buttons">
          <Button 
            className="button big-button"
            text = "See all Entries" 
            onClick = {() => navigate('/entries')} />

          <Button 
            className="button big-button"
            text = "Write New" 
            onClick = {() => navigate('/submission')} />
        </div>
      </div>
      <Footer className = "footer" text = "© 2023 Meltown Tracker"/>
    </div>
  )
}

export default Homepage;