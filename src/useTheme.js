// src/hooks/useTheme.js
import { useState, useEffect } from 'react';

const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark' : 'light';
    }, [isDarkMode]);

    return { isDarkMode, toggleTheme };
};

export default useTheme;