import React, { useState } from 'react'

export default function HomePage() {
  const [x, setx] = useState(1)
  return (
    <div>
      <button onClick={() => { setx(1) }}>page 1</button>
      <button onClick={() => { setx(2) }}>page 2</button>
      <button onClick={() => { setx(3) }}>page 3</button>

      {x === 1 && <p>1: hai</p>}
      {x === 2 && <p>2: hello</p>}
      {x === 3 && <p>3: how are you</p>}

    </div>
  )
}
