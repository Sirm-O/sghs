import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import AcademicsPage from './components/pages/AcademicsPage';
import StudentLifePage from './components/pages/StudentLifePage';
import GalleryPage from './components/pages/GalleryPage';
import ContactPage from './components/pages/ContactPage';
import StarBackground from './components/layout/StarBackground';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white relative overflow-hidden">
        <StarBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/student-life" element={<StudentLifePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

