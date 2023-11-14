import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App';

export default function Students() {
  const { user } = useContext(UserContext);
  const [list, setlist] = useState([])
  const [student, setStudent] = useState('')
  const [father, setFather] = useState('')
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    fetch('http://localhost:4000/api/persons')
      .then(res => res.json())
      .then(json => {
        setlist(json)
      })
  }, [refresh])


  function addStudent() {
    const d = document.getElementById("welcome")
    console.log('hai');
    d.showModal()
  }
  function closeBox() {
    const d = document.getElementById("welcome")
    setStudent('')
    setFather('')
    d.close()
  }
  function handleForm() {
    const data = { fname: student, lname: father }
    const body = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + user.token,
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:4000/api/persons/', body)
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
        "Authorization": "Bearer " + user.token,
      }
    }
    fetch('http://localhost:4000/api/persons/' + id, body)
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

      {user.token && <button onClick={addStudent}>Add Student</button>}

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
            return (
              <tr>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                {user.token && <td><button onClick={() => { deleteStudent(item.id) }}>Delete</button></td>}
              </tr>
            )
          })
        }
      </table>
    </div >
  )
}
