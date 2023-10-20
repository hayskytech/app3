import React, { useState } from 'react'
import { Button, Form, Header, Image, Input, Modal } from 'semantic-ui-react'

function ModalExampleModal(p) {
  const [open, setOpen] = React.useState(false)
  const [item, setitem] = useState('')
  function handleAdd() {
    const newlist = [...p.list]
    newlist.push(item)
    p.setlist(newlist)
    handleclose()
  }
  function handleclose() {
    setOpen(false)
    setitem('')
  }
  return (
    <Modal
      closeIcon
      closeOnDimmerClick={false}
      onClose={handleclose}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Item</Button>}
    >
      <Modal.Header>Add New Item</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={handleAdd}>
            <Input value={item} onChange={(e) => { setitem(e.target.value) }} />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={handleclose}>Close</Button>
        <Button color='blue' onClick={handleAdd}>Add Item</Button>

      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal