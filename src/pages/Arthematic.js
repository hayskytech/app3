import React from 'react'

export default function Arthematic() {
  const x = 5
  const y = 6
  const age = 19
  let msg = ''
  if (age >= 18) {
    msg = 'eligible for voting'
  } else {
    msg = 'not eligible for voting'
  }

  return (
    <div>
      this is home content
      <br />
      {x} + {y} = {x + y}
      <br />
      {x} - {y} = {x - y}
      <br />
      {x} * {y} = {x * y}
      <br />
      {x} / {y} = {x / y}
      <hr />
      <h2>{msg}</h2>
    </div>
  )
}
