// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './components/IntroPage';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Preview from './components/Preview';
import './App.css';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState({});

  const handleUpdate = (section, data) => {
    if (section === 'personalInfo') {
      setPersonalInfo(data);
    } else if (section === 'education') {
      setEducation(data);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<IntroPage />}
        />
        <Route
          path="/cv"
          element={
            <div>
              <PersonalInfo onUpdate={handleUpdate} />
              <Education onUpdate={handleUpdate} />
              <Preview personalInfo={personalInfo} education={education} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
