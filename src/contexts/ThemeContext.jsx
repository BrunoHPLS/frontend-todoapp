import React ,{ createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {

    const [theme,setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  );
}

export {ThemeContext,ThemeProvider};