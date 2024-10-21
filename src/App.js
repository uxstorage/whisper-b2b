import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Routes>
            <Route path="/" element={<Home />}>
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
