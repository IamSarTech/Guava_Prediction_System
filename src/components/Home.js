import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css"; // Ensure global styles are applied

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleUploadRedirect = () => {
    navigate("/upload"); // Redirects to Upload Page
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <h2 className="header-title">Guava Disease Detection</h2>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="home-content">
        <h1 className="home-title">Guava Disease Prediction</h1>
        <p className="home-description">
          Upload an image of your guava fruit to detect diseases like Anthracnose or Fruit Fly.
        </p>

        {/* Redirect to Upload Page */}
        <button className="upload-button" onClick={handleUploadRedirect}>
          Upload Image
        </button>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Guava Disease Prediction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
