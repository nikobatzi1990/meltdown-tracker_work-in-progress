import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { UserAuth } from "../context/AuthContext";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

function Taglist(props) {
  const { onClick } = props;
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

  const handleTagInput = (e) => {
    e.preventDefault();
    setNewTag(e.target.value);
  };

  const handleNewTag = async () => {
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

  return (
    <div className="grid grid-cols-1 m-5">
      <h3 className="text-xxl m-5 text-center">Tags</h3>

      <div className="p-4 grid grid-cols-5 grid-rows-6 gap-4 text-lg border-1 rounded-md">
        {tags.length > 0
          ? tags.map((tag) => (
              <button
                className="border-solid border-1 rounded-md cursor-pointer"
                key={tag}
                value={tag}
                onClick={onClick}
                type="button"
              >
                {tag}
              </button>
            ))
          : "No entries"}
      </div>

      <form onSubmit={handleNewTag} className="flex flex-col gap-4 m-3">
        <Input
          id="newTag"
          className="p-2 border-1 rounded-md"
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

Taglist.propTypes = {
  onClick: PropTypes.func.isRequired,
};
