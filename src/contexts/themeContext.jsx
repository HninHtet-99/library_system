import { createContext } from "react";

//themecontext
const ThemeContext = createContext();

//themecontext provider
const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
