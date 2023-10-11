import React from 'react'

export default function Loops() {

  for (let i = 1; i <= 10; i++) {
    if (i == 3) {
      continue
    }
    if (i == 7) {
      break
    }
    console.log(i, 'hai');
  }

  return (
    <div>

    </div>
  )
}
