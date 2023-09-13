import { createContext } from "react";

export const themes = {
    light:{
        backgroundColor: '#FFF',
        color: '#000',
        navColor: 'bg-red-200',
        cardColor: 'bg-cyan-50'
    },
    dark:{
        backgroundColor: '#000',
        color: 'white',
        cardColor: 'bg-gray-700',
        navColor: 'bg-gray-500'
    }
}

const ThemeContext = createContext(themes.light);

export default ThemeContext;