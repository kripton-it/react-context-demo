import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

const ThemeContext = createContext();

const ThemeProvider = props => {
  const [isDark, toggleTheme] = useToggleState(true);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
