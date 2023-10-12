import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


export default function ModalBox() {

  const [box, setbox] = useState(false)

  function run() {
    setbox(true)
  }
  function closebox() {
    setbox(false)
  }

  return (
    <div>
      <Modal
        open={box}
        closeIcon
        onClose={() => setbox(false)}
        onOpen={() => setbox(true)}
      >
        <Modal.Header>Add New Item:</Modal.Header>
        <Modal.Content>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis, nisi nihil sunt, consequatur velit ducimus beatae doloremque id eum blanditiis itaque autem voluptatem praesentium dolorum! Earum dolorum quas nesciunt!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='grey' onClick={closebox}>Close</Button>
          <Button color='blue' onClick={() => { setbox(false) }}>Save Changes</Button>
        </Modal.Actions>
      </Modal>



      <Button color='blue' onClick={run}>Open Box</Button>
    </div>
  )
}
