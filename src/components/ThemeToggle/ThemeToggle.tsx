import React from 'react'
import { useTheme } from 'src/context/theme'
import useStore from 'src/store';

type Props = {}

const ThemeToggle = (props: Props) => {
    const {theme, toggleTheme} = useStore();
    
  return (
    <div onClick={toggleTheme}>{theme}</div>
  )
}

export default ThemeToggle