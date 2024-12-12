import React from 'react';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import AboutPage from './pages/AboutPage';  // Import AboutPage
import ContactPage from './pages/ContactPage'; // Import ContactPage
import { ThemeProvider } from './context/ThemeContext';
import { NewsProvider } from './context/NewsContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import PrivacyPolicy from './Components/PrivacyPolicy.jsx'; // Import PrivacyPolicy component

import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <NewsProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<NewsBoard />} />
              <Route path="/about" element={<AboutPage />} /> {/* Route for About */}
              <Route path="/contact" element={<ContactPage />} /> {/* Route for Contact */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Route for Privacy Policy */}
            </Routes>
          </main>
          <Footer />
        </Router>
      </NewsProvider>
    </ThemeProvider>
  );
};

export default App;
