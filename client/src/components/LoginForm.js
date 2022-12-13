import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser, setPosts }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };

    fetch("/login", config)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
        fetch("/posts")
          .then((r) => r.json())
          .then((data) => {
            setPosts(data)
            navigate("/posts");
          });
        setCredentials({
          username: "",
          password: "",
          password_confirmation: "",
        });
      })
      .catch((err) => console.log(err));
  };

  const handleChange = ({ target }) => {
    const stateCopy = JSON.parse(JSON.stringify(credentials));
    stateCopy[target.name] = target.value;
    setCredentials(stateCopy);
  };

  return (
    <div className="login-form">
      <h2> Login </h2>
      <form onSubmit={handleSubmit}>
        <label> Username </label>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={credentials.username}
        ></input>

        <label> Password </label>
        <input
          name="password"
          type="text"
          onChange={handleChange}
          value={credentials.password}
        ></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default LoginForm;
