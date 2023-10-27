import React, { useContext } from 'react'
import { ThemeContext, UserContext } from './MainMenu';

export default function AboutPage() {
  const x = useContext(UserContext);
  const { user, setUser, age } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  console.log(x);
  return (
    <div>
      {theme}
      <h1>{user}</h1>
      <h1>{x.age}</h1>
      <button onClick={() => { setUser('Bat') }}>Change username</button>

    </div>
  )
}
