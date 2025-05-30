// src/components/CreateCV.js
import React, { useState } from 'react';

const CreateCV = ({ history }) => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', // Clear error when user types
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!personalInfo.fullName || personalInfo.fullName.length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters long.';
    }
    if (!personalInfo.email || !/\S+@\S+\.\S+/.test(personalInfo.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!personalInfo.phoneNumber || personalInfo.phoneNumber.length < 10) {
      newErrors.phoneNumber = 'Phone number must be at least 10 digits long.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Process the form data as needed
    console.log('CV Form Data:', personalInfo);
    // Redirect to the next page or perform other actions
    history.push('/');
  };

  return (
    <div className="create-cv-container">
      <h1>Create Your CV</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Generate CV</button>
      </form>
    </div>
  );
};

export default CreateCV;