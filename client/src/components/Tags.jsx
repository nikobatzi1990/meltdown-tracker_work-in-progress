import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import axios from 'axios';
import "./Tags.css";
import Button from "./Button";
import Input from "./Input";

const Tags = (props) => {
  const { className, type, value, onChange, onSubmit } = props;
  const { user, getTags } = UserAuth();
  const [tags, setTags] = useState();
  const [newTag, setNewTag] = useState('');
 
  const handleTagInput = (event) => {
    setNewTag(event.target.value);
  }

  const addTag = async (event) => {
    const newTagData = {
      'tagName': newTag, 
      'uid': user.uid
    }
    console.log('😁', newTagData);
    await axios.post('/api/tags', newTagData)
    console.log('😇', 'Tag added!');
  }

  return (
    <div
      className = { className }
      type = { type }
      value = { value }
      onChange = { onChange }
      onSubmit = { onSubmit }>

      <div> Tags appear here </div> 

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