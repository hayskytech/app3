import React from 'react'
import './new.css'

export default function Sample() {

  return (
    <div>
      <h1>hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta hic expedita non, fugiat praesentium quia quaerat animi placeat ducimus, voluptas, deserunt dolore qui. Placeat tenetur velit delectus aliquam quam.</p>
      <h2 style={{ color: 'red', backgroundColor: 'yellow' }}>Hai</h2>
      <h2 style={{ color: 'red', backgroundColor: 'yellow' }}>Hai</h2>
      <h2 style={{ color: 'red', backgroundColor: 'yellow' }}>Hai</h2>
      <h2 style={{ color: 'red', backgroundColor: 'yellow' }}>Hai</h2>

      <h3 style={ss}>Hai how are you?</h3>
      <h3 style={ss}>Hai how are you?</h3>
      <h3 style={ss}>Hai how are you?</h3>
      <h3 style={ss}>Hai how are you?</h3>
    </div>
  )
}

const ss = { color: 'blue', fontSize: 25 }
