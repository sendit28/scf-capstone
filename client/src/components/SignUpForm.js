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
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    }).then((r) => {
      setIsLoading(false);
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
            {/* <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/> */}
            <span className="h1 fw-bold mb-0">Show and Tell Blog</span>
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
                {/* <a href="#!" class="link-info">
                  Register here
                </a> */}
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
        {/* "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" */}
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUpForm;


  /* <div className="signup-form">
      <h2>Signup here</h2>
      <form onSubmit={handleSubmit}>
        <label> Username </label>
        <input name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        
        <label> Email </label>
        <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>

        <label> Password </label>
        <input name="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>

        <label> Password Confirmation</label>
        <input name="password-confirmation" type="text" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>

        <input type="submit"></input>

        
        {/* <div>
           {errors.map((err) => (
            <div key={err}>{err}</div>
          ))}
        </div> */


//   </form>
// </div> */}
