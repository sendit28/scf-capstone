import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function PostForm({ setPosts, user, posts }) {
  const navigate = useNavigate()
  const initialState = {
    title: "",
    date: "",
    description: "",
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // const stateCopy = JSON.parse(JSON.stringify(posts))
    const formDataCopy = {...formData, user_id: user.id}
    // const formDataCopy = JSON.parse(JSON.stringify({ ...formData, user_id: user.id}))

    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDataCopy)
    })
      .then(r=> r.json())
      .then(data => {
        setPosts((posts) => [...posts, data])
      })
      navigate("/posts")
      setFormData(initialState)
  }
  
  
  return (
    <div className="post-form">
      <h2> Give me your Show and Tell </h2>
      <form onSubmit={handleSubmit}>
        <label> Title </label>
        <input name="title" type="text" onChange={handleChange} value={formData.title}/>
        <label> Date </label>
        <input name="date" type="text" onChange={handleChange} value={formData.date}/>
        <label> Post </label>
        <input name="description" type="text" onChange={handleChange} value={formData.description}/>
        <input type="submit"></input>
      </form>
    </div>
    )
}

export default PostForm