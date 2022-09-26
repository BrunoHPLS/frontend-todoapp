import React ,{ createContext } from "react";
import useTheme from "../hooks/useTheme";

const ThemeContext = createContext();

function ThemeProvider({children}) {

  const {theme,changeTheme,createThemeStorage} = useTheme();

  return (
    <ThemeContext.Provider value={{theme, changeTheme,createThemeStorage}}>
        {children}
    </ThemeContext.Provider>
  );
}

export {ThemeContext,ThemeProvider};