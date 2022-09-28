import { base, themes } from '@/theme/index';
import React, { useEffect, useRef } from 'react'
import { useTheme } from 'src/context/theme'
import useStore from 'src/store';

type Props = {}

const ThemeToggle = (props: Props) => {
    const {theme, toggleTheme} = useStore();
    const prevTheme = useRef('');
    const rootDiv = useRef(null);
    const colorMode = theme === "light" ? themes.light : themes.dark;
    const oldTheme = theme !== "light" ? themes.light : themes.dark;
    const themeClass = `${base.class} ${colorMode}`

    // If theme was toggled, change the class on the root div
    // This is a nasty workaround because Astro islands are suffocating
    useEffect(() => {
            if(prevTheme.current !== theme) {
                if(!rootDiv.current) {
                    rootDiv.current = window.document.body;
                }
                console.log('toggling theme class', rootDiv.current)
                // rootDiv.current.className = themeClass;
                rootDiv.current.classList.remove(oldTheme);
                rootDiv.current.classList.add(colorMode);
                rootDiv.current.classList.add(base.class);
                prevTheme.current = theme;
            }
    
    }, [theme])
    
    
  return (
    <div onClick={toggleTheme}>{theme}</div>
  )
}

export default ThemeToggle