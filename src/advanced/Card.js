import React from 'react'

export default function Card(p) {

  return (
    <div>
      <p>{p.children[0]}</p>
      <p>{p.children[1]}</p>
      <p>{p.name}</p>
    </div>
  )
}
