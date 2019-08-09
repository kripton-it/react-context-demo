import React, { Component, createContext } from "react";

const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: true
    };
  }

  toggleTheme = () => {
    this.setState(({ isDark }) => ({
      isDark: !isDark
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContext, ThemeProvider };
