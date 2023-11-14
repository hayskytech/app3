import React, { useContext, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { UserContext } from '../App';

export default function SQLRegister() {
  const { user, setUser } = useContext(UserContext);
  let showform = true
  let defaultmsg = ''
  if (user) {
    showform = false
    defaultmsg = 'You are logged in...'
  }
  const [msg, setMsg] = useState(defaultmsg)
  const [form, setForm] = useState(showform)

  function handleForm(e) {
    e.preventDefault()
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "React App",
      "Content-Type": "application/json"
    }
    let bodyContent = JSON.stringify({
      "username": e.target.username.value,
      "password": e.target.password.value
    });
    const data = {
      method: "POST",
      body: bodyContent,
      headers: headersList
    }
    fetch("http://localhost:4000/api/register", data)
      .then(res => res.json())
      .then(json => {
        setMsg(json)
        if (json === 'registration success') {
          setForm(false)
        }
      })
  }
  function dologout() {
    localStorage.setItem('token', '')
    setUser(null)
    setForm(true)
    setMsg('')
  }
  return (
    <div>
      <h3>Registration Form</h3>
      {form && <Form onSubmit={handleForm}>
        <Form.Field>
          <label>Username</label>
          <input type="text" name='username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" name='password' />
        </Form.Field>
        <Form.Field>
          <Button color='blue'>Register</Button>
        </Form.Field>
      </Form>}
      <p>{msg}</p>
      <hr />
      {!form && <Button onClick={dologout} color='red'>Logout</Button>}
    </div>
  )
}
