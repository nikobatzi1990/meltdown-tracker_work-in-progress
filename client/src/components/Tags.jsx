import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import "./Tags.css";
import Button from "./Button";
import Input from "./Input";
import Taglist from "./Taglist";

const Tags = (props) => {
  const { className, type } = props;
  const { user } = UserAuth();
  const [newTag, setNewTag] = useState('');

  const handleTagInput = (event) => {
    setNewTag(event.target.value);
  }

  const addTag = async () => {
    const newTagData = {
      'tagName': newTag, 
      'uid': user.uid
    }
    await axios.post('/api/tags', newTagData);
  }

  return (
    <div
      className = { className }
      type = { type } >
      <h4>Your tags</h4>

          <Taglist />

      <Input 
        className="input tag-input"
        placeholder = "Type your new tag here"
        onChange = { handleTagInput }
        value = { newTag }
        />

      <Button 
        className="button tag-submit"
        text = "Add New Tag"
        onClick = { addTag } />

    </div>
  )
};

export default Tags;