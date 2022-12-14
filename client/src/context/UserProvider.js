// src/context/UserContext.js

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();


const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState(null)

  const navigate = useNavigate();


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) =>{
          setUser(user)
        });
      }
    });
  }, []);

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

  function handleUpdatePost(updatedPost) {
    const stateCopy = JSON.parse(JSON.stringify(posts))
    const updatedPosts = stateCopy.map((post) => post.id === updatedPost.id ? updatedPost : post);
    setPosts(updatedPosts);
  }

  return <UserContext.Provider value={{user, setUser, posts, setPosts, updatedPost, setUpdatedPost, handleLogoutClick, handleDeletePost, handleUpdatePost, navigate}} >{children}</UserContext.Provider>;
};

export default UserProvider;