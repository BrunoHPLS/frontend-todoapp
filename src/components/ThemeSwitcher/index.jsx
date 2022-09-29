import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Container, Label } from './style';

function ThemeSwitcher() {
    
    const {theme,changeTheme} = useContext(ThemeContext);
    const [checked,setChecked] = useState(theme === 'dark');

    function getThemeStorage(){
      return JSON.parse(localStorage.getItem('theme'));
    }

    function switchThemes(){
      const value = theme === 'dark' ? 'light':'dark';
      setChecked(value === 'dark');
      changeTheme(value);
    }

    useEffect(()=>{
      const themeStorage =getThemeStorage();
      setChecked(themeStorage === 'dark');
    },[]);

  return (
    <Container isChecked = {checked}>
      <input 
      hidden
      defaultChecked={getThemeStorage() === 'dark'}
      type="checkbox" 
      name="themeSwitch" 
      id="themeSwitch" 
      />
      <Label 
      htmlFor="themeSwitch" 
      onClick={switchThemes}
      isChecked = {checked}
      />
    </Container>
  );
}

export default ThemeSwitcher;