import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function SignUpForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          navigate("/posts")
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  
  
   return (
    <div className="signup-form">
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
        </div> */}
        
      </form>
    </div>
  )
}

export default SignUpForm