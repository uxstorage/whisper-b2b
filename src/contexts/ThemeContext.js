import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkModePreference = localStorage.getItem('darkMode');
        if (darkModePreference === 'true') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            document.body.classList.toggle('dark-mode', newMode);
            localStorage.setItem('darkMode', newMode);
            return newMode;
        });
    }, []);

    const value = useMemo(() => ({ isDarkMode, toggleDarkMode }), [isDarkMode, toggleDarkMode]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
