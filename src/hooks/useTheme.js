
import React, { useEffect, useState } from 'react';

export default function useTheme() {

    const defaultThemeValue = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light';
    
    const [theme,setTheme] = useState(defaultThemeValue);
    
    useEffect(()=>{
       createThemeStorage();
    },[]);

    function createThemeStorage(){
        const themeStorage = localStorage.getItem('theme');

        if(themeStorage){
            setTheme(JSON.parse(themeStorage));
        }else{
            localStorage.setItem('theme',JSON.stringify(defaultThemeValue))
        }
    }

    function changeTheme(value){
        createThemeStorage();

        if(value !== 'dark' && value !== 'light'){
            setTheme(defaultThemeValue);
        }else{
            setTheme(value);
        }

        localStorage.setItem('theme',JSON.stringify(value));
    }

    return {theme,changeTheme,createThemeStorage};
}