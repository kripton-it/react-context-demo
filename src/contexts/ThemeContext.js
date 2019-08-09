import React, { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = props => {
  const [ isDark, setIsDark ] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
