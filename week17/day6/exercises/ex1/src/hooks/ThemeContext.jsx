import {createContext, useContext, useState} from "react";

const ThemeContext = createContext(null)

export default function ({ children }) {
    const [theme, setTheme] = useState('dark')

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => {
    return useContext(ThemeContext);
};