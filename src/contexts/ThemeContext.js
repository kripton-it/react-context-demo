import React, { Component, createContext } from "react";

const ThemeContext = createContext();
// const { Provider, Consumer } = createContext();

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
        {/* <Provider value={{ ...this.state }}> */}
        {this.props.children}
        {/* </Provider> */}
      </ThemeContext.Provider>
    );
  }
}

// export { Consumer, ThemeProvider };
export { ThemeContext, ThemeProvider };
