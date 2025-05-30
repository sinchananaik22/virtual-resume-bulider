// src/components/Education.js
import React, { useState } from 'react';

const Education = ({ onUpdate }) => {
  const [education, setEducation] = useState({
    degree: '',
    school: '',
    graduationYear: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', // Clear error when user types
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!education.degree) {
      newErrors.degree = 'Degree is required.';
    }
    if (!education.school) {
      newErrors.school = 'School name is required.';
    }
    if (!education.graduationYear || !/^\d{4}$/.test(education.graduationYear)) {
      newErrors.graduationYear = 'Graduation year must be a valid 4-digit year.';
    }
    return newErrors;
  };

  const handleUpdate = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onUpdate('education', education);
  };

  return (
    <div>
      <h2>Education</h2>
      <form>
        <label>
          Degree:
          <input
            type="text"
            name="degree"
            value={education.degree}
            onChange={handleChange}
          />
          {errors.degree && <span className="error">{errors.degree}</span>}
        </label>
        <br />
        <label>
          School:
          <input
            type="text"
            name="school"
            value={education.school}
            onChange={handleChange}
          />
          {errors.school && <span className="error">{errors.school}</span>}
        </label>
        <br />
        <label>
          Graduation Year:
          <input
            type="text"
            name="graduationYear"
            value={education.graduationYear}
            onChange={handleChange}
          />
          {errors.graduationYear && <span className="error">{errors.graduationYear}</span>}
        </label>
      </form>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Education;