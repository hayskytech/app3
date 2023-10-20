import React, { useState } from 'react'

export default function TodoListEditable() {
  let data = []
  if (localStorage.getItem('todo')) {
    data = JSON.parse(localStorage.getItem('todo'))
  }
  const [list, setlist] = useState(data)
  const [item, setitem] = useState('')
  const [editindex, seteditindex] = useState(false)

  function deleteitem(index) {
    const newlist = [...list]
    newlist.splice(index, 1)
    setlist(newlist)
    localStorage.setItem('todo', JSON.stringify(newlist))
  }
  function edititem(index) {
    setitem(list[index])
    seteditindex(index)
  }
  function saveitem() {
    const newlist = [...list]
    newlist[editindex] = item
    console.log(editindex);
    setlist(newlist)
    setitem('')
    seteditindex(false)
    localStorage.setItem('todo', JSON.stringify(newlist))
  }
  function additem(e) {
    e.preventDefault()
    const newlist = [...list]
    newlist.push(item)
    setlist(newlist)
    setitem('')
    localStorage.setItem('todo', JSON.stringify(newlist))
  }
  function cancelitem() {
    setitem('')
    seteditindex(false)
  }

  return (
    <div>
      {editindex}
      <form onSubmit={additem}>
        <input type="text" value={item}
          onChange={(e) => { setitem(e.target.value) }}
        />
      </form>

      {editindex === false ?
        <button onClick={additem}>Add</button>
        :
        <button type='button' onClick={saveitem}>Save</button>
      }
      <button type='button' onClick={cancelitem}>Cancel</button>

      <br />
      <table className='ui celled collapsing unstackable blue table'>
        {list.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td><button onClick={() => { deleteitem(index) }}>Delete</button></td>
              <td><button onClick={() => { edititem(index) }}>Edit</button></td>
            </tr>)
        })
        }
      </table>
    </div>
  )
}
