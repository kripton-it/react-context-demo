import React, { useState, createContext } from "react";

const LanguageContext = createContext();

const LanguageProvider = props => {
  const [ language, setLanguage ] = useState("english");
  const changeLanguage = ({ target }) => {
    const newLanguage = target.value;
    newLanguage !== language && setLanguage(newLanguage);
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
