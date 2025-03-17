import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [solution, setSolution] = useState(""); // New state for solution text

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle form submission
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const predictedDisease = data.disease; // API should return {"disease": "Anthracnose"}

      setPrediction(predictedDisease);
      setMessage(getDiseaseMessage(predictedDisease));
      setSolution(getDiseaseSolution(predictedDisease)); // Set solution based on disease
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error processing the image. Try again.");
    }

    setLoading(false);
  };

  // Function to return messages based on the predicted disease
  const getDiseaseMessage = (disease) => {
    switch (disease) {
      case "Anthracnose":
        return "Your guava plant is affected by Anthracnose!";
      case "Fruit Fly":
        return "Your guava has a Fruit Fly infestation!";
      case "Healthy":
        return "✅ Your guava plant is healthy! Keep up the good care.";
      default:
        return "❌ Unable to determine the disease. Please try again with a clearer image.";
    }
  };

  // Function to return solutions for the predicted disease
  const getDiseaseSolution = (disease) => {
    switch (disease) {
      case "Anthracnose":
        return "   Solution for Anthracnose: \n" +
               "1. Use copper-based fungicides (like Bordeaux mixture)\n" +
               "2. Prune and remove infected parts of the plant\n" +
               "3. Avoid overhead watering to reduce humidity\n" +
               "4. Ensure proper air circulation around the plant";
      case "Fruit Fly":
        return "  Solution for Fruit Fly Infestation: \n" +
               "1. Use pheromone traps to attract and catch flies\n" +
               "2. Apply neem oil or organic insecticides\n" +
               "3. Destroy infested fruits immediately to prevent spreading\n" +
               "4. Cover fruits with net bags to prevent flies from laying eggs";
      case "Healthy":
        return "1. Keep monitoring your plant for early signs of disease.\n" +
               "2. Maintain good watering and pruning habits to keep it healthy!";
      default:
        return "⚠️ No solution available. Try uploading a clearer image.";
    }
  };

  return (
    <div className="upload-container">
      <header className="header">
        <h2 className="header-title">Guava Disease Detection</h2>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </header>

      <h1 className="header-title-text">Upload Guava Image for Disease Detection</h1>
      <input className="upload-some" type="file" accept="image/*" onChange={handleFileChange} />
      <button className="upload-img-button" onClick={handleUpload} disabled={loading}>
        {loading ? "Checking..." : "Upload & Predict"}
      </button>

      {prediction && (
        <div className="prediction-result">
          <h2 className="disease-name">{message}</h2>
          <p className="disease-solution">{solution}</p>
        </div>
      )}

      <footer className="footer">
        <p>© 2025 Guava Disease Prediction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UploadPage;
