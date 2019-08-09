import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

const ThemeContext = createContext();

const ThemeProvider = props => {
  const [isDark, toggleIsDark] = useToggleState(true);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: toggleIsDark }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
