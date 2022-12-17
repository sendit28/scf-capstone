import '../App.css';
import React, { useContext } from "react";
import { UserContext } from '../context/UserProvider'
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import EditPostForm from './EditPostForm';
import NavBar from './NavBar';
// import Login from '../pages/Login';

function App() {
  // const [user, setUser] = useState(null);
  // const [posts, setPosts] = useState([]);
  // const [updatedPost, setUpdatedPost] = useState(null)

  const {user, setUser, posts, setPosts, updatedPost, setUpdatedPost, navigate, handleLogoutClick, handleDeletePost, handleUpdatePost} = useContext(UserContext)

  // console.log(user)

  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) =>{
  //         setUser(user)
  //       });
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch("/posts")
  //    .then((r) =>r.json())
  //    .then((data) => setPosts(data));
  // }, []);

  // if (!user) return <LoginForm onLoginForm={setUser} />

  
  // const handleLogoutClick = () => {
  //   fetch("/logout", {
  //     method: "DELETE",
  //   }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //       navigate("/");
  //     }
  //   });
  // };

  // function handleDeletePost(deletedPost) {
  //   const stateCopy = JSON.parse(JSON.stringify(posts))
  //   const updatedPosts = stateCopy.filter((post) => post.id !== deletedPost.id);
  //   setPosts(updatedPosts);
  // }

  // function handleUpdatePost(updatedPost) {
  //   const stateCopy = JSON.parse(JSON.stringify(posts))
  //   const updatedPosts = stateCopy.map((post) => post.id === updatedPost.id ? updatedPost : post);
  //   setPosts(updatedPosts);
  // }

  return (
    <div className="App">
      <NavBar handleLogoutClick={handleLogoutClick} />
      {/* <button onClick={() => navigate("/signup")}>SignUp</button>
      <button onClick={() => navigate("/")}>Login</button>
      <button onClick={() => navigate("/posts")}>Posts</button>
      <button onClick={() => navigate("/posts/new")}>Create Posts</button>
      <button onClick={handleLogoutClick}>Logout</button> */}
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
            <PostCard posts={posts} handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost} setUpdatedPost={setUpdatedPost} />
          }
        />
        <Route
          path="/posts/new"
          element={
            <PostForm setPosts={setPosts} user={user} posts={posts} />
          }
        />
        <Route
          path="/posts/edit"
          element={
            <EditPostForm setPosts={setPosts} user={user} posts={posts} updatedPost={updatedPost} setUpdatedPost={setUpdatedPost} handleUpdatePost={handleUpdatePost} />
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
