import React, { useState } from 'react'

export default function SpecialButton(p) {
  const [box, setbox] = useState({})
  const [phase, setphase] = useState(false)
  const [color, setcolor] = useState('skyblue')
  function handleBtn() {
    setphase(!phase)
    if (phase) {
      setcolor('pink')
    } else {
      setcolor('skyblue')
    }
  }

  return (
    <button
      onMouseOver={() => { setbox({ backgroundColor: color }) }}
      onMouseLeave={() => { setbox({ backgroundColor: 'white' }) }}
      onClick={handleBtn}
      style={box}
    >{p.children} {phase ? 'skyb' : 'pink'}</button>
  )
}
