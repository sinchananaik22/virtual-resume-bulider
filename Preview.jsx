// src/components/Preview.js
import React, { useState } from 'react';
import FormattedResume from './FormattedResume';
import './Preview.css';

const Preview = ({ personalInfo, education }) => {
  const [showResume, setShowResume] = useState(false);

  const handleGenerateResume = () => {
    setShowResume(true);
  };

  const handleCloseModal = () => {
    setShowResume(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <div className="preview-container">
      <div className="preview-section">
        <h2>Preview</h2>
        {personalInfo.profilePicture && (
          <div className="profile-picture">
            <img
              src={URL.createObjectURL(personalInfo.profilePicture)}
              alt="Profile"
              className="profile-image"
            />
          </div>
        )}
        <p>
          <strong>Name:</strong> {personalInfo.firstName} {personalInfo.lastName}
        </p>
        <p>
          <strong>Email:</strong> {personalInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {personalInfo.phone}
        </p>
        {education.degree && education.school && education.graduationYear && (
          <>
            <h3>Education</h3>
            <p>
              <strong>Degree:</strong> {education.degree}
            </p>
            <p>
              <strong>School:</strong> {education.school}
            </p>
            <p>
              <strong>Graduation Year:</strong> {education.graduationYear}
            </p>
          </>
        )}
      </div>
      <button onClick={handleGenerateResume} className="generate-button">
        Generate Resume
      </button>

      {showResume && (
        <div className="resume-modal" onKeyDown={handleKeyDown}>
          <div className="resume-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <FormattedResume personalInfo={personalInfo} education={education} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;