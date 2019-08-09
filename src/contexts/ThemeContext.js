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
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {/* <Provider value={{ ...this.state }}> */}
        {this.props.children}
        {/* </Provider> */}
      </ThemeContext.Provider>
    );
  }
}

// export { Consumer, ThemeProvider };
export { ThemeContext, ThemeProvider };
