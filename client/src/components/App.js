import "../App.css";
import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import EditPostForm from "./EditPostForm";
import NavBar from "./NavBar";

function App() {
  const {
    user,
    setUser,
    posts,
    setPosts,
    updatedPost,
    setUpdatedPost,
    handleLogoutClick,
    handleDeletePost,
    handleUpdatePost,
  } = useContext(UserContext);

  return (
    <div className="App">
      <NavBar handleLogoutClick={handleLogoutClick} />
      <Routes>
        <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
        <Route
          path="/"
          element={<LoginForm setUser={setUser} setPosts={setPosts} />}
        />
        <Route
          path="/posts"
          element={
            <PostCard
              posts={posts}
              handleDeletePost={handleDeletePost}
              handleUpdatePost={handleUpdatePost}
              setUpdatedPost={setUpdatedPost}
            />
          }
        />
        <Route
          path="/posts/new"
          element={<PostForm setPosts={setPosts} user={user} posts={posts} />}
        />
        <Route
          path="/posts/edit"
          element={
            <EditPostForm
              setPosts={setPosts}
              user={user}
              posts={posts}
              updatedPost={updatedPost}
              setUpdatedPost={setUpdatedPost}
              handleUpdatePost={handleUpdatePost}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
