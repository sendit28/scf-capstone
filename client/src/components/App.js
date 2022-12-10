// import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import PostForm from "./PostForm";

// import Login from '../pages/Login';

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) =>{
          setUser(user)
          // (...user)(data)
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/posts")
     .then((r) =>r.json())
     .then((data) => setPosts(data));
  }, []);

  // if (!user) return <Login onLogin={setUser} />

  
  const handleLogoutClick = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  };

  function handleDeletePost(deletedPost) {
    const stateCopy = JSON.parse(JSON.stringify(posts))
    const updatedPosts = stateCopy.filter((post) => post.id !== deletedPost.id);
    setPosts(updatedPosts);
  }

  return (
    <div className="App">
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => navigate("/posts/new")}>Create Posts</button>
      <Routes>
        <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
        {/* <Route path="/login" element={<LoginForm setUser={setUser} />} /> */}

        {/* <Route path="/testing" element={<h1>Test Route</h1>} /> */}
        <Route
          path="/"
          element={<LoginForm setUser={setUser} setPosts={setPosts} />}
        />
        <Route
          path="/posts"
          element={
            <PostCard posts={posts} handleDeletePost={handleDeletePost} />
          }
        />
        <Route
          path="/posts/new"
          element={
            <PostForm setPosts={setPosts} user={user} posts={posts} />
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
