import { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import './DarkMode.css';

const DarkMode = () => {
    const [theme, setTheme] = useState (
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );

    const element = document.documentElement;

    useEffect(() => {
    // Store theme in localStorage and update the document's class
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        element.classList.add('dark');
        element.classList.remove('light');
    } else {
        element.classList.add('light');
        element.classList.remove('dark');
    }
}, [theme]); // Effect runs every time theme change

  return (
    <> 
        {theme === 'dark' ?  (
            <BiSolidSun onClick={() => setTheme('light')} className='bisolidsun'/> 
        ) : (
            <BiSolidMoon onClick={() => setTheme('dark')} className='bisolidmoon'/>
        )}
    </>
  );
};

export default DarkMode