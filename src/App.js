import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UploadPage from "./components/UploadPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

