import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <h1>🌐 Welcome to your AI Interview Coach</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/interview">Start</Link>
        <Link to="/progress">Progress</Link> {/* New link for Progress */}
        <Link to="/resources">Resources</Link> {/* New link for Resources */}
      </nav>
    </header>
  );
};

export default Header;
