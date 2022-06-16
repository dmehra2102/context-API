import { createContext, useState } from "react";


export const ThemeContext = createContext();
export const ThemeProviderWrapper = ({children})=>{
    const [theme,setTheme] = useState("Light");
    const handleTheme = ()=> {
        setTheme(theme==="Light" ? "Dark" : "Light");
    }
    return <ThemeContext.Provider value={{theme,handleTheme}}>{children}</ThemeContext.Provider>
}