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
  const [isTagClicked, setIsTagClicked] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

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

  const handleClickTag = async (e) => {
    const clickedTag = e.target.value;

    if (clickedTag === selectedTag) {
      setSelectedTag("");
      setIsTagClicked(false);
      handleEntries();
      return;
    }

    setSelectedTag(clickedTag);
    setIsTagClicked(true);

    try {
      const fetchedPosts = await axios.get(
        `/api/${user.uid}/entries/${clickedTag}`,
      );
      setEntries(fetchedPosts.data);
    } catch (error) {
      console.log("💋", error);
    }
  };

  return (
    <div className="@container">
      <Header />
      <div className="grid grid-cols-2">
        <Taglist onClick={handleClickTag} />
        <EntryList
          entries={entries}
          isTagClicked={isTagClicked}
          selectedTag={selectedTag}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
