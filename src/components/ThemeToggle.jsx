import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'inherit',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default ThemeToggle;
