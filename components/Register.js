import React, { useState } from 'react';
import { FaUser, FaEnvelope,FaIdCard, FaIdCardAlt, FaLock } from 'react-icons/fa'; // Import icons from React Icons
import './Register.css'; // Import CSS file for styling

function RegistrationPage() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [panNo, setPanNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration submitted:', {
      userName,
      email,
      aadharNo,
      panNo,
      password,
      confirmPassword,
      agreeTerms
    });
    // You can send this data to your backend for further processing
  };

  return (
    <div className="registration-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">
            <FaUser className="icon" /> {/* Icon for user name */}
            User Name:
          </label>
          <input type="text" id="userName" placeholder="Enter your user name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope className="icon" /> {/* Icon for email */}
            Email:
          </label>
          <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="aadharNo">
            <FaIdCardAlt className="icon" /> {/* Icon for Aadhar number */}
            Aadhar No:
          </label>
          <input type="text" id="aadharNo" placeholder="Enter your Aadhar number" value={aadharNo} onChange={(e) => setAadharNo(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="panNo">
            <FaIdCard className="icon" /> {/* Icon for PAN number */}
            PAN No:
          </label>
          <input type="text" id="panNo" placeholder="Enter your PAN number" value={panNo} onChange={(e) => setPanNo(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <FaLock className="icon" /> {/* Icon for password */}
            Password:
          </label>
          < input type="password" id="password" placeholder="&#x1F512; Enter your password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">
            <FaLock className="icon" /> {/* Icon for confirm password */}
            Confirm Password:
          </label>
          <input type="password" id="confirmPassword" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <input type="checkbox" id="agreeTerms" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} required />
          I agree to the terms and conditions
        </div>
        <button className='register-button' type="submit"><b>Register</b></button>
      </form>
    </div>
  );
}

export default RegistrationPage;
