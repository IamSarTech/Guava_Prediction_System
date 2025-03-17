import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Global styles
import Member1 from "../assets/sarkphoto.jpg";
import Member2 from "../assets/sinha.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Guava Disease Prediction</h1>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/upload" className="nav-link">Upload</Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Our mission is to help farmers and researchers detect guava diseases like 
          <strong> Anthracnose</strong> and <strong>Fruit Fly</strong> using AI-powered image recognition.
        </p>
        <p className="about-description">
          Our AI model is trained on thousands of images to ensure accurate and reliable results.
          We aim to make disease detection **easy, fast, and accessible** for everyone.
        </p>

        {/* Team Section */}
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src={Member1} alt="Sarthak" className="team-image" />
            <h3 className="team-name">Sarthak Sisodia</h3>
            <p className="team-role">ML and React Developer</p>
          </div>
          <div className="team-member">
            <img src={Member2} alt="Member 2" className="team-image" />
            <h3 className="team-name">Aditya Sinha</h3>
            <p className="team-role">ML and Backend Developer</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Guava Disease Prediction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
