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
    <div className="grid grid-cols-1 m-5">
      <h3 className="text-xxl m-5 text-center">Tags</h3>

      <div className="p-2 grid grid-cols-6 grid-rows-6 gap-4 text-lg border-1 rounded">
        {tags.length > 0
          ? tags.map((tag) => (
              <button
                className="border-solid border-1 rounded-md cursor-pointer"
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

      <form onSubmit={handleNewTag} className="flex flex-col gap-4 m-3">
        <Input
          id="newTag"
          className="p-2 border-1 rounded"
          type="text"
          value={newTag}
          onChange={handleTagInput}
          name="newTag"
        />

        <SubmitButton
          className="p-2 cursor-pointer border-none rounded-md bg-sky-900 text-white place-self-center"
          text="Add new tag(s)"
        />
      </form>
    </div>
  );
}

export default Taglist;
