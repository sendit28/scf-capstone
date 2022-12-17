import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBTextArea
} from "mdb-react-ui-kit";


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
    const formDataCopy = {...formData, user_id: user.id}
    
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
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            {/* <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/> */}
            <span className="h1 fw-bold mb-0">Share your Show and Tell</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3
                className="fw-normal mb-3 ps-5 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Create
              </h3>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Title"
                id="formControlLg"
                name="title"
                type="text"
                size="lg"
                onChange={handleChange}
                value={formData.title}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Date"
                id="formControlLg"
                name="date"
                type="text"
                size="lg"
                onChange={handleChange}
                value={formData.date}
              />
              <MDBTextArea rows={6}
                wrapperClass="mb-4 mx-5 w-100"
                label="Post"
                id="formControlLg"
                name="description"
                type="text"
                size="lg"
                onChange={handleChange}
                value={formData.description}
              />

              <MDBBtn className="mb-4 px-5 mx-5 w-100" color="info" size="md" type="submit"> Publish
              </MDBBtn>
              {/* {errors.map((err) => <div key={err} style={{color: "red"}}>{err}</div>)} */}
              {/* <p className="ms-5">
                Don't have an account?{" "}
                <Link to="/signup">Signup Here</Link> */}
                {/* <a href="#!" class="link-info">
                  Register here
                </a> */}
              {/* </p> */}
            </div>
          </form>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
}

export default PostForm

{/* <div className="post-form">
      <h2> Share your Show and Tell </h2>
      <form onSubmit={handleSubmit}>
        <label> Title </label>
        <input name="title" type="text" onChange={handleChange} value={formData.title}/>
        <label> Date </label>
        <input name="date" type="text" onChange={handleChange} value={formData.date}/>
        <label> Post </label>
        <input name="description" type="text" onChange={handleChange} value={formData.description}/>
        <input type="submit"></input>
      </form>
    </div> */}