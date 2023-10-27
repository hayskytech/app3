import React from 'react'
import Card from './Card'

export default function Nested() {
  return (
    <div>
      <Card name="raju" age={30}>
        <b>hai</b>
        <i>hello</i>
        <i>bye</i>
      </Card>

    </div>
  )
}
