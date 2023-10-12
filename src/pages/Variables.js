import React, { useState } from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'

export default function Variables() {

  const [x, setx] = useState(5)
  const [y, sety] = useState(6)

  function handlex(e) {
    setx(e.target.value)
  }
  function handley(e) {
    sety(e.target.value)
  }

  return (
    <div>
      X: <input type="number" value={x} onChange={handlex} />
      <br />
      Y: <input type="number" value={y} onChange={handley} />
      <hr />

      <div>Multiplication: {x * y}</div>
      <div>Div: {x / y}</div>
      <div>Sub: {x - y}</div>

      <hr />
      <Container>
        <Form size='huge'>
          <Form.Field>
            <label>X</label>
            <input value={x} onChange={handlex} />
          </Form.Field>
          <Form.Field>
            <label>Y</label>
            <input value={y} onChange={handley} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>

    </div>
  )
}
