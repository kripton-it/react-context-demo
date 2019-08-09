import React, { Component, createContext } from "react";

const LanguageContext = createContext();
// const { Provider, Consumer } = createContext();

class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "english"
    };
  }

  setLanguage = ({target}) => {
    const newLanguage = target.value;
    newLanguage !== this.state.language &&
      this.setState({
        language: newLanguage
      });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, setLanguage: this.setLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

// export { Consumer, ThemeProvider };
export { LanguageContext, LanguageProvider };
