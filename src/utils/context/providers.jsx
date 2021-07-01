import { createContext, useState } from "react";

// Survey answers provider
export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [surveyAnswers, setSurveyAnswers] = useState({});

  const saveSurveyAnswers = (newAnswers) => {
    setSurveyAnswers({ ...surveyAnswers, ...newAnswers });
  };

  return (
    <SurveyContext.Provider value={{ surveyAnswers, saveSurveyAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
};

// Theme provider (light/dark modes)
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
