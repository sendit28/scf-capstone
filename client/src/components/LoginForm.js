import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function LoginForm({ setUser, setPosts }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };

    fetch("/login", config).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user);
          fetch("/posts")
            .then((r) => r.json())
            .then((data) => {
              setPosts(data);
              navigate("/posts");
            });
        });
      } else {
        resp.json().then((response) => {
          setErrors([...response.errors]);
          setTimeout(() => {
            setErrors([]);
          }, 3000);
        });
      }
      setCredentials({
        username: "",
        password: "",
      });
    });
  };

  const handleChange = ({ target }) => {
    const stateCopy = JSON.parse(JSON.stringify(credentials));
    stateCopy[target.name] = target.value;
    setCredentials(stateCopy);
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <span className="h1 fw-bold mb-0">Show and Tell Blog</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3
                className="fw-normal mb-3 ps-5 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Log in
              </h3>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Username"
                id="formControlLg"
                name="username"
                type="text"
                size="lg"
                onChange={handleChange}
                value={credentials.username}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                id="formControlLg"
                name="password"
                type="password"
                size="lg"
                onChange={handleChange}
                value={credentials.password}
              />

              <MDBBtn className="mb-4 px-5 mx-5 w-100" color="info" size="lg">
                Login
              </MDBBtn>
              {errors.map((err) => (
                <div key={err} style={{ color: "red" }}>
                  {err}
                </div>
              ))}
              <p className="ms-5">
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </form>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Login"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;
