// adapted from tutorial at https://siddsarkar.medium.com/add-a-dark-theme-toggle-to-your-next-js-and-tailwind-app-using-reacts-context-api-67042d2666d2

import React, { createContext, useEffect, useState } from 'react'; 
const defaultState = {
    dark: true, 
    toggleDark: () => {},
};

const ThemeContext = createContext(defaultState); 
const ThemeProvider = ({children}) => {
    const [dark, setDark] = useState(true); 
    useEffect(() => {
        const lsDark = localStorage.getItem('dark'); 
        if (lsDark !== null) {
            setDark(JSON.parse(lsDark));
        }
    }, []);
    
    const toggleDark = () => {
        const d = document.documentElement;
        const themes = ["light", "dark"];
        if (dark) {
            d.classList.remove(...themes); 
            d.classList.add("light"); 
        } else {
            d.setAttribute("class", "dark");
        }
        localStorage.setItem("dark", JSON.stringify(!dark));
        setDark(!dark); 
    };
    return (
        <ThemeContext.Provider
            value={{
                dark, toggleDark,
            }}>
                {children}
            </ThemeContext.Provider>
    );
};

export default ThemeContext;
export { ThemeProvider }