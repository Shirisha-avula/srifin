import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons from React Icons
import './Login.css'; // Import your CSS file

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for the remember me toggle
  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Here you can add your login logic
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className='logindetails' htmlFor="username">
            <FaUser className="icon" /> {/* Icon for username */}
            Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label  className='logindetails' htmlFor="password">
            <FaLock className="icon" /> {/* Icon for password */}
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group checkbox-group">
          <label htmlFor="rememberMe" className="checkbox-label">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
          <a href="/orgot-password" className={`a ${forgotPasswordClicked ? 'clicked' : ''}`} onClick={() => setForgotPasswordClicked(true)}>Forgot Password?</a>
        </div>
        <button className='center' type="submit"><b>Login</b></button>
      </form>
      {/* Optional: Add a link to the registration page */}
      <p>Not registered yet? <a href="/registration" className={`a ${registerClicked ? 'clicked' : ''}`} onClick={() => setRegisterClicked(true)}>Register here</a></p>
    </div>
  );
}

export default LoginPage;
