import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
// import axios from 'axios';
import "./Tags.css";
import Button from "./Button";
import Input from "./Input";

const Tags = (props) => {
  const { className, type, value, onChange, onSubmit } = props;
  const { getTags } = UserAuth();
  const [tags, setTags] = useState();

  // useEffect (() => {
  //   getTagList();
  //   console.log('🦷', getTagList());
  // }, []);

  // const getTagList = async (event) => {
  //   event.preventDefault();
  //   setTags(getTags());
  // }

  // const addTag = async (event) => {
  //   event.preventDefault();
  //   newTagData = {
  //     'user_id': userId, 'tag_name': tagName, 'times_used': timesUsed
  //   }
  //   const userTags = await axios.post('/api/tags', newTagData);
  // }

  return (
    <div
      className = { className }
      type = { type }
      value = { value }
      onChange = { onChange }
      onSubmit = { onSubmit }>

      <Input placeholder = "Search"/>

      <div> Tags appear here </div> 

      <Button text = "Add New Tag"/>

    </div>
  )
};

export default Tags;