import '../Styles/PartyRegisterForm.css'
import React, { useState } from 'react';

const PartyRegistrationForm = () => {
  // State variables for input fields
  const [partyName, setPartyName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [partyEmail, setPartyEmail] = useState('');
  const [partyDescription, setPartyDescription] = useState('');
  const [partyIdeology, setPartyIdeology] = useState('');
  const [partyFlag, setPartyFlag] = useState(null); // For image file

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPartyFlag(imageURL);
    }
  };

  return (
    <div className='formDiv'>
    <div className="form-container">
      <h1 className="form-title">Party Registration</h1>
      <div className="form-content">
        {/* Left Side Inputs */}
        <div className="form-left">
          <label className="form-label">Party Name</label>
          <input
            type="text"
            placeholder="Enter Party Name"
            value={partyName}
            onChange={(e) => setPartyName(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Leader Name</label>
          <input
            type="text"
            placeholder="Enter Leader Name"
            value={leaderName}
            onChange={(e) => setLeaderName(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Party Flag</label>
                    <div className="image-upload-container">
                        <div className="image-preview">
                            {partyFlag ? (
                            <img src={partyFlag} alt="Uploaded" className="image" />
                            ) : (
                            <div className="placeholder-text">Choose Image</div>
                            )}
                        </div>
                        <label htmlFor="upload-input" className="upload-btn">
                            Choose Image
                        </label>
                        <input
                            id="upload-input"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="file-input"
                        />
                    </div>

        </div>

        {/* Right Side Inputs */}
        <div className="form-right">
          <label className="form-label">Party Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={partyEmail}
            onChange={(e) => setPartyEmail(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Party Description</label>
          <textarea
            placeholder="Enter Description"
            value={partyDescription}
            onChange={(e) => setPartyDescription(e.target.value)}
            className="form-textarea"
          />

          <label className="form-label">Party Ideology</label>
          <textarea
            placeholder="Enter Ideology"
            value={partyIdeology}
            onChange={(e) => setPartyIdeology(e.target.value)}
            className="form-textarea"
          />
        </div>
      </div>
      <button className="register-btn">Register Party</button>

    </div>
    </div>
  );
};

export default PartyRegistrationForm;
