import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function MyProfile() {
  const { userid } = useParams()

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
      <hr />
      {userid}
    </div>
  )
}
