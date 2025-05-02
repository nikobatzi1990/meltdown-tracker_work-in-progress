import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { UserAuth } from "../context/AuthContext";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

function Taglist(props) {
  const { className } = props;
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
    <div className={className}>
      <h4>Your tags</h4>

      <div>
        {tags.length > 0
          ? tags.map((tag) => (
              <button
                key={tag}
                value={tag}
                className="tag"
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

Taglist.defaultProps = {
  className: "taglist",
};

Taglist.propTypes = {
  className: PropTypes.string,
};

export default Taglist;
