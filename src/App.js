import React from 'react'
import Main, { About, Home } from './comp/Main'
import Books from './comp/Books'
import Students from './comp/Students'

export default function App() {
  return (
    <div>
      <Main />
      <Home />
      <About />
      <Books />
      <Students />
    </div>
  )
}
