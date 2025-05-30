// src/components/FormattedResume.js
import React, { useState } from 'react';
import './FormattedResume.css';

const FormattedResume = ({ personalInfo, education, experience, skills }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!personalInfo.fullName) {
      newErrors.fullName = 'Full name is required.';
    }
    if (!personalInfo.email || !/\S+@\S+\.\S+/.test(personalInfo.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!personalInfo.phoneNumber || personalInfo.phoneNumber.length < 10) {
      newErrors.phoneNumber = 'Phone number must be at least 10 digits long.';
    }
    if (!education.degree) {
      newErrors.degree = 'Degree is required.';
    }
    if (!education.school) {
      newErrors.school = 'School name is required.';
    }
    if (!education.graduationYear || !/^\d{4}$/.test(education.graduationYear)) {
      newErrors.graduationYear = 'Graduation year must be a valid 4-digit year.';
    }
    // Add validation for experience and skills as needed
    return newErrors;
  };

  const handleUpdate = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Process the form data as needed
    console.log('Formatted Resume Data:', {
      personalInfo,
      education,
      experience,
      skills,
    });
  };

  return (
    <div className="formatted-resume">
      <h2>Formatted Resume</h2>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {personalInfo.fullName}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phoneNumber}</p>
        {errors.fullName && <span className="error">{errors.fullName}</span>}
        {errors.email && <span className="error">{errors.email}</span>}
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
      </div>
      <div>
        <h3>Education</h3>
        <p>Degree: {education.degree}</p>
        <p>School: {education.school}</p>
        <p>Graduation Year: {education.graduationYear}</p>
        {errors.degree && <span className="error">{errors.degree}</span>}
        {errors.school && <span className="error">{errors.school}</span>}
        {errors.graduationYear && <span className="error">{errors.graduationYear}</span>}
      </div>
      {/* Add sections for experience and skills */}
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default FormattedResume;