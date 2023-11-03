import React, { useEffect, useState } from 'react'

export default function Students() {
  const [list, setlist] = useState([])
  const [student, setStudent] = useState('')
  const [father, setFather] = useState('')
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    fetch('http://localhost:4000/students')
      .then(res => res.json())
      .then(json => {
        setlist(json)
      })
  }, [refresh])

  const d = document.getElementById("welcome")

  function addStudent() {
    console.log('hai');
    d.showModal()
  }
  function closeBox() {
    setStudent('')
    setFather('')
    d.close()
  }
  function handleForm() {
    const data = { student, father }
    const body = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:4000/students', body)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setRefresh(!refresh)
        closeBox()
      })
  }
  function deleteStudent(id) {
    const body = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
    fetch('http://localhost:4000/students/' + id, body)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setRefresh(!refresh)
        closeBox()
      })
  }
  return (
    <div>
      <h2>Students List</h2>

      <button onClick={addStudent}>Add Student</button>

      <dialog id="welcome">
        <h3>Student Details</h3>
        Student : <input type="text" value={student} onChange={(e) => { setStudent(e.target.value) }} />
        <br />
        Father: <input type="text" value={father} onChange={(e) => { setFather(e.target.value) }} />
        <br />
        <button onClick={handleForm}>Submit</button>
        <button onClick={closeBox}>Close</button>
      </dialog>

      <table className='ui blue unstackable collapsing table'>
        {
          list.map((item) => {
            // if (item.student === null) {
            //   return
            // }
            return (
              <tr>
                <td>{item.student}</td>
                <td><button onClick={() => { deleteStudent(item.id) }}>Delete</button></td>
              </tr>
            )
          })
        }
      </table>
    </div >
  )
}
