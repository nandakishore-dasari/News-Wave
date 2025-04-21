import React, { createContext, useContext, useEffect, useState } from 'react';


const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
 
  const [theme, setTheme] = useState('dark');


  useEffect(() => {
    // Updating document theme
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle 
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

// Custom hook usetheme
export function useTheme() {
  return useContext(ThemeContext);
} 