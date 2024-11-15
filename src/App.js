import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactForm from './pages/ContactForm';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible';
  }, [isMenuOpen]);

  const basename = process.env.NODE_ENV === 'production' ? '/whisper-b2b' : '';

  return (
    <ThemeProvider>
      <Router basename={basename}>
        <div className="App">
          <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />}>
              <Route path="modal-usecase-:id" element={<Home />} />
            </Route>
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
