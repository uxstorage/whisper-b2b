import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as WhisperLogo } from '../assets/whisper-logo.svg';
import { ReactComponent as WhisperLogoDark } from '../assets/whisper-logo-dark.svg';

function Header({ isMenuOpen, toggleMenu }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const darkModePreference = localStorage.getItem('darkMode');
        if (darkModePreference === 'true') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    useEffect(() => {
        const metaThemeColor = document.querySelector("meta[name=theme-color]");
        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", isDarkMode ? "#17171A" : "#ffffff");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', !isDarkMode);
    };

    const handleNavClick = () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    };

    return (
        <header>
            <div className="container">
                <Link
                    to="/home"
                    className="logo"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/home');
                    }}
                >
                    {isDarkMode ? <WhisperLogoDark className="logo-svg" /> : <WhisperLogo className="logo-svg" />}
                </Link>
                <nav className={isMenuOpen ? 'active' : ''}>
                    <ul>
                        <li>
                            <Link to="/contact" className="btn" onClick={handleNavClick}>
                                <span>문의하기</span>
                            </Link>
                        </li>
                        <li className="mobile-theme-toggle">
                            <button className="theme-toggle" onClick={toggleDarkMode}>
                                {isDarkMode ? '🌙' : '☀️'}
                            </button>
                        </li>
                    </ul>
                </nav>

                <button className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <>
                            <span></span>
                            <span></span>
                            <span></span>
                        </>
                    )}
                </button>
            </div>
        </header>
    );
}

export default Header;
