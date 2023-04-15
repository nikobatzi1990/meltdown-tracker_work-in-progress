import React, { useState } from "react";
import axios from 'axios';
import "./Tags.css";
import Button from "./Button";
import Input from "./Input";

const Tags = (props) => {
  const { className, type, value, onChange, onSubmit } = props;
  const [tags, setTags] = useState();

  /**
  useEffect (() = > {
    console.log('🦷', tags);
  }, [tags]);
  
  const handleTags = async (event) => {
    event.preventDefault();
    const userTags = await axios.get('/api/logout');
    setTags(userTags);
  }

   */

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