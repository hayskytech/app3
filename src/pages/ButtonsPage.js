import React from 'react'
import { Button } from 'semantic-ui-react';

export default function ButtonsPage() {

  function run() {
    console.log('hai how are you');
  }
  return (
    <div>
      <button onClick={run}>Click here</button>
      <h1 style={{ color: 'red', backgroundColor: 'skyblue' }}>Hello world</h1>

      <Button color='blue'>Login</Button>
      <Button color='green'>Register</Button>
    </div>
  )
}
