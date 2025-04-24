import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { UserAuth } from "../context/AuthContext";
import Button from "./Button";
import Input from "./Input";
import "./styles/Taglist.css";

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
    setNewTag(event.target.value);
  };

  const handleNewTag = async () => {
    const newTagData = {
      tagName: newTag,
      uid: user.uid,
    };
    await axios.post("/api/tags/newTag", newTagData);
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

      <div className="tags">
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
          className="input tag-input"
          placeholder="Type your new tag here"
          onChange={handleTagInput}
          value={newTag}
        />

        <Button
          className="button tag-submit"
          text="Add New Tag"
          type="submit"
        />
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
