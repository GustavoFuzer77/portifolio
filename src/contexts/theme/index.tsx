import { createContext } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
);
