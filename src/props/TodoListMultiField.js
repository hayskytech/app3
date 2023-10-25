import React from 'react'
import { useState } from 'react'

export default function TodoListMultiField() {
  const [list, setlist] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries());
    const newList = list.concat(formJson)
    setlist(newList)
    // form.title.value = ''
    // form.description.value = ''
    // form.date.value = ''
    form.reset()
  }

  const [profile, setProfile] = useState({ fname: 'raj', lname: 'kumar' })

  function updateProfile(e) {
    e.preventDefault()
    const formData = (new FormData(e.target))
    const formJson = Object.fromEntries(formData.entries())
    setProfile(formJson);
  }

  return (
    <div>

      {JSON.stringify(profile)}

      <form action="" id='f1' onSubmit={updateProfile}>
        fname:
        <input type="text" name="fname" defaultValue={profile.fname} /><br /><br />
        lname
        <input type="text" name="lname" defaultValue={profile.lname} /><br /><br />
        <button>Update</button>
        <br /><br />
      </form>

      <hr />

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          // defaultValue={`task name`}
          placeholder='task name'
          required
        />
        <br /><br />

        <label>Description:</label><br />
        <textarea
          name="description"
          rows="4"
          cols="50"
          placeholder='description'
          required
        ></textarea><br /><br />

        <label>Date:</label>
        <input type="date" name="date" required /><br /><br />

        <input type="submit" value="Submit" />
      </form>


      <table className='ui blue table celled collapsing'>
        {list.map((item) => (
          <tr>
            <td>{item.title}</td>
            <td>{item.date}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </table>

    </div>
  )
}
