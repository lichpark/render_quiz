import { createContext, useContext, useState } from "react";

const Context = createContext();

export const DarkModeContext = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  return (
    <Context.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </Context.Provider>
  );
};

export const useDarkMode = () => useContext(Context);
