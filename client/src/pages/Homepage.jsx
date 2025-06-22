import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Taglist from "../components/Taglist";
import EntryList from "../components/EntryList";

function Homepage() {
  const { user } = UserAuth();
  const [entries, setEntries] = useState([]);

  const handleClickTag = async (e) => {
    e.preventDefault();
    const clickedTag = e.target.value;
    try {
      const fetchedPosts = await axios.get(
        `/api/${user.uid}/entries/${clickedTag}`,
      );
      setEntries(fetchedPosts.data);
    } catch (error) {
      console.log("💋", error);
    }
  };

  const handleEntries = async () => {
    try {
      const fetchedEntries = await axios.get(`/api/${user.uid}/entries`);
      setEntries(fetchedEntries.data);
    } catch (error) {
      console.log("👹", error);
    }
  };

  useEffect(() => {
    handleEntries();
  }, [user.uid]);

  return (
    <div className="@container">
      <Header />
      <div className="grid grid-cols-2">
        <Taglist onClick={handleClickTag} />
        <EntryList entries={entries} />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
