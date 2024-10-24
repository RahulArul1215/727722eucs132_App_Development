import '../Styles/PublicRegister.css';
import React, { useState } from 'react';

const PublicRegister = () => {
  // State variables for input fields
  const [name, setName] = useState('');
  const [adharNumber, setAdharNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [voterId, setVoterId] = useState('');

  return (
    <div className='formDiv'>
      <div className="form-container">
        <h1 className="form-title">Public Registration</h1>
        <div className="form-content">
          {/* Left Side Inputs */}
          <div className="form-left">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />

            <label className="form-label">Adhar Number</label>
            <input
              type="text"
              placeholder="Enter Adhar Number"
              value={adharNumber}
              onChange={(e) => setAdharNumber(e.target.value)}
              className="form-input"
            />
          </div>

          {/* Right Side Inputs */}
          <div className="form-right">
            <label className="form-label">Nationality</label>
            <input
              type="text"
              placeholder="Enter Nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="form-input"
            />

            <label className="form-label">Voter ID</label>
            <input
              type="text"
              placeholder="Enter Voter ID"
              value={voterId}
              onChange={(e) => setVoterId(e.target.value)}
              className="form-input"
            />
          </div>
        </div>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
};

export default PublicRegister;
