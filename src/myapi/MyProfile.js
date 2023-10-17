import React, { useState } from 'react'

export default function MyProfile() {
  let x = ''
  x = localStorage.getItem('user')
  const [user, setuser] = useState(x)

  function handlesave() {
    localStorage.setItem('user', user)
  }
  return (
    <div>
      <input type="text" value={user} onChange={(e) => { setuser(e.target.value) }} />
      <button onClick={handlesave}>Save Changes</button>
    </div>
  )
}
