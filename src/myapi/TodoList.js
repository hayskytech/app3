import React, { useState } from 'react'

export default function TodoList() {
  const x = localStorage.getItem('todos')
  let datalist = []
  if (x) {
    datalist = JSON.parse(x)
  }
  const [list, setlist] = useState(datalist)
  const [text, settext] = useState('')

  function additem(e) {
    e.preventDefault()
    if (text === '') {
      return
    }
    const newList = [...list]
    newList.push(text)
    setlist(newList)
    // setlist([...list, text])
    settext('')
    localStorage.setItem('todos', JSON.stringify(newList))
  }
  return (
    <div>
      <h3>Add Item</h3>
      <form onSubmit={additem}>
        <input
          type="text"
          onChange={(e) => { settext(e.target.value) }}
          value={text}
          required
        />
        <button>Add Item</button>
      </form>
      <h3>Todo List</h3>
      <ol>
        {
          list.map((item) => {
            return (
              <>
                <li>{item}</li>
              </>
            )
          })
        }
      </ol>
    </div>
  )
}