import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditPostForm({ updatedPost, setUpdatedPost, handleUpdatePost }) {
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const config = {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedPost)
    }
    
    fetch(`/posts/${updatedPost.id}`, config)
      .then(function(r){
        return r.json()
      }).then(function(data){
        handleUpdatePost(data)
        navigate("/posts")
      })
  
  }
  
  const handleChange = (e) => {
    setUpdatedPost({
      ...updatedPost,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div>
    <h2>EditPostForm</h2>
    <div className="edit-post-form">
      <h2> Update your Show and Tell </h2>
      <form onSubmit={handleSubmit}>
        <label> Title </label>
        <input name="title" type="text" onChange={handleChange} value={updatedPost.title}/>
        
        <label> Post </label>
        <input name="description" type="text" onChange={handleChange} value={updatedPost.description}/>
        <input type="submit"></input>
      </form>
    </div>
    </div>
  )
}

export default EditPostForm