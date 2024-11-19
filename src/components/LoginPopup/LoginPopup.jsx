
import React, { useState } from 'react';
import './LoginPopup.css';
import { useNavigate } from 'react-router-dom';

import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const navigate=useNavigate();
  const [currState, setCurrState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (currState === "Sign Up" && !name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!email.trim() || !password.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    if (currState === "Login") {
      alert('Login Successful');
      setShowLogin(false); 
    } else {
      alert('Account Created Successfully');
      setCurrState("Login");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={handleLogin}>
        
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
        </div>

        <div className='login-popup-inputs'>
          {currState === "Sign Up" && (
            <input 
              type='text' 
              placeholder='Your name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          )}
          <input 
            type='email' 
            placeholder='Your email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type='password' 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;