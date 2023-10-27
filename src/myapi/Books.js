import React, { useContext } from 'react'
import { ThemeContext, UserContext } from './MainMenu';

export default function Books() {
  const { user, setUser, age } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  function changetheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <div>
      <button onClick={changetheme}>toggle</button>
      <h1>{age}</h1>
      this is books page
    </div>
  )
}
