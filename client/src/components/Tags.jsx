import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import "./Tags.css";
import Button from "./Button";
import Input from "./Input";
import Taglist from "../pages/Taglist";

const Tags = (props) => {
  const { className, type } = props;
  const { user } = UserAuth();
  // const [tags, setTags] = useState();
  const [newTag, setNewTag] = useState('');

  // handles adding tags
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

      <Taglist />

      <Input 
        placeholder = "Type your new tag here"
        onChange = { handleTagInput }
        value = { newTag }
        />

      <Button 
        text = "Add New Tag"
        onClick = { addTag } />

    </div>
  )
};

export default Tags;