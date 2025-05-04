import axios from "axios";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

function Taglist() {
  const { user } = UserAuth();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const handleTaglist = async () => {
    try {
      const fetchedTags = await axios.get(`/api/${user.uid}/tags`);
      setTags(fetchedTags.data);
    } catch (error) {
      console.log("😁", error);
    }
  };

  useEffect(() => {
    handleTaglist();
  }, [user.uid]);

  const handleTagInput = (event) => {
    event.preventDefault();
    setNewTag(event.target.value);
  };

  const handleNewTag = async (event) => {
    event.preventDefault();
    try {
      const newTagData = {
        tagName: newTag,
        uid: user.uid,
        timesUsed: 0,
      };
      await axios.post("/api/tags/newTag", newTagData);
    } catch (error) {
      console.log("💀", error);
    }
    handleTaglist();
  };

  const handleClickTag = async (event) => {
    event.preventDefault();
    const clickedTag = event.target.innerText;
    try {
      const fetchedPosts = await axios.get(`/api/entries/${clickedTag}`);
      console.log("👅", fetchedPosts.data);
    } catch (error) {
      console.log("💋", error);
    }
  };

  return (
    <div className="w-50 flex flex-col justify-center items-center gap-3">
      <h3 className="text-xl m-5">Tags</h3>

      <div className="flex gap-1">
        {tags.length > 0
          ? tags.map((tag) => (
              <button
                key={tag}
                value={tag}
                onClick={handleClickTag}
                type="button"
              >
                {tag}
              </button>
            ))
          : "Loading..."}
      </div>
      <form onSubmit={handleNewTag}>
        <Input
          className="w-30 border-1 rounded"
          onChange={handleTagInput}
          value={newTag}
        />

        <SubmitButton text="Add New Tag" />
      </form>
    </div>
  );
}

export default Taglist;
