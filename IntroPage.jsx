import React from 'react';
import { Link } from 'react-router-dom';
import './IntroPage.css';

// Use a relative path to the image within the public folder
const backgroundImage = process.env.PUBLIC_URL + '/resume-summary-generators-cover.jpg';

const IntroPage = () => {
  const containerStyle = {
    backgroundImage: `linear-gradient(to right, rgba(52, 152, 219, 0.8), rgba(41, 128, 185, 0.8)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      <div className="intro-content">
        <h1>Create Your Professional CV with Ease</h1>
        <p>Build a stunning CV in minutes with our intuitive CV maker app.</p>
        <Link to="/cv">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default IntroPage;