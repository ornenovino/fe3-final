import { createContext } from "react";

export const themes = {
    light:{
        backgroundColor: '#FFF',
        color: '#000'
    },
    dark:{
        backgroundColor: '#000',
        color: '#FFF'
    }
}

const ThemeContext = createContext(themes.light);

export default ThemeContext;