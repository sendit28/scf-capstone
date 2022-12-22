import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { UserContext } from "../context/UserProvider";


function SignUpForm({ setUser }) {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const { setPosts } = useContext(UserContext)

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          fetch("/posts")
            .then((r) => r.json())
            .then((data) => {
              setPosts(data);
              navigate("/posts");
            });
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
        setTimeout(() => {
          setErrors([])
        }, 3000)
      }
    });
  }

  const handleChange = ({ target }) => {
    const stateCopy = JSON.parse(JSON.stringify(userData));
    stateCopy[target.name] = target.value;
    setUserData(stateCopy);
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <span className="h1 fw-bold mb-0">Join Show and Tell.</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3
                className="fw-normal mb-3 ps-5 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign Up Here!
              </h3>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Username"
                id="formControlLg"
                name="username"
                type="text"
                size="lg"
                onChange={handleChange}
                value={userData.username}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email"
                id="formControlLg"
                name="email"
                type="text"
                size="lg"
                onChange={handleChange}
                value={userData.email}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                id="formControlLg"
                name="password"
                type="password"
                size="lg"
                onChange={handleChange}
                value={userData.password}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password Confirmation"
                id="formControlLg"
                name="passwordConfirmation"
                type="password"
                size="lg"
                onChange={handleChange}
                value={userData.passwordConfirmation}
              />

              <MDBBtn className="mb-4 px-5 mx-5 w-100" color="info" size="lg">
                Sign Up
              </MDBBtn>
              {errors.map((err) => (
                <div key={err} style={{ color: "red" }}>
                  {err}
                </div>
              ))}
              <p className="ms-5">
                Already have an account? <Link to="/">Login</Link>
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

export default SignUpForm;


