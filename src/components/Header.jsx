import React, { useState, useEffect } from 'react';
import Button from './Button';

const TO_DARK_MODE = 'Dark';
const TO_LIGHT_MODE = 'Light';
const IS_DARK_MODE = 'isDarkMode';

export default function Header() {
    const [themeText,setThemeText] = useState(TO_DARK_MODE);

    useEffect(() => {
        if (sessionStorage.isDarkMode) {
            document.documentElement.classList.add('dark');
            themeText === TO_DARK_MODE && setThemeText(TO_LIGHT_MODE);
        }
        else {
            document.documentElement.classList.remove('dark');
        }
        
    },[themeText]);

    function changeThemeText(currentTheme) {
        if(currentTheme === TO_DARK_MODE) {
            sessionStorage.setItem(IS_DARK_MODE,'true');
            setThemeText(TO_LIGHT_MODE);
        }
        else {
            sessionStorage.removeItem(IS_DARK_MODE);
            setThemeText(TO_DARK_MODE);
        }
    }

  return (
    <header className='p-2 flex justify-around border-b-2 border-b-[#bbaeaecb]'>
        <h1 className='font-bold text-4xl tracking-widest dark:text-[#fff]'>Tech Blogs</h1>
        <Button onclick={()=>changeThemeText(themeText)} buttonText={themeText}/>
    </header>
  )
}
