// LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';  // Assuming you'll have separate styles for this page

const LandingPage = () => {
  const history = useNavigate();

  const handleGetStartedClick = () => {
    history('/home'); // Redirect to home page
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Your AI Interview Coach</h1>
      <p>Prepare for interviews in any language with personalized coaching.</p>
      <button className="get-started-button" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
