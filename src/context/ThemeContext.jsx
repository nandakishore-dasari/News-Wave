import React, { createContext, useContext, useEffect, useState } from 'react';

// Create theme context
const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
  // State for theme
  const [theme, setTheme] = useState('dark');

  // Effect to update theme
  useEffect(() => {
    // Update document theme
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'light') {
        return 'dark';
      } else {
        return 'light';
      }
    });
  };

  // Context value
  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for theme
export function useTheme() {
  return useContext(ThemeContext);
} 