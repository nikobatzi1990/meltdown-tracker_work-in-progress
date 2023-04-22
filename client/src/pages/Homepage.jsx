import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Homepage.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from "../components/Button";
import Tags from "../components/Tags";

const Homepage = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    await axios.post('/api/logout');
    navigate('/');
  }
  
  return (
    <div>
      <div className="greeting">
        <h4>Hello, { user.email }! </h4>
        <Button 
          text="Logout"
          onClick={ handleLogout } />
      </div>

      <Header className = "header" text = "Homepage"/>

      <div className = "main">
        <Tags className = "tag-wrapper" />

        <div className="buttons">
          <Button 
            className="button"
            text = "See all Entries" 
            onClick = {() => navigate('/entries')} />

          <Button 
            text = "Write New" 
            onClick = {() => navigate('/submission')} />
        </div>
      </div>
      <Footer className = "homepage-footer" text = "© 2023 Meltown Tracker"/>

    </div>
  )
}

export default Homepage;