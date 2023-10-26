import React, { useRef, useState } from 'react'
import { ss } from './Styles'
import './sty.css'
import SpecialButton from './SpecialButton'

export default function DOM() {
  function addcls() {
    const table = document.getElementById('table')
    table.classList.add("blue")
    document.getElementById('fname').value = 'hai'
  }
  function removecls() {
    const table = document.getElementById('table')
    table.classList.remove("blue")
  }
  function collapse() {
    const table = document.getElementById('table')
    table.classList.add("collapsing")
    table.classList.add("unstackable")
  }
  const fname = useRef('')
  function handleBtn() {
    console.log(fname.current.value);
  }
  function changeclr1() {
    document.getElementById('myh1').style.color = 'blue'
  }

  let [styles, setstyles] = useState(ss)
  function changeclr2() {
    // const x = { ...styles }
    // x.color = 'green'
    // x.fontSize = 32
    // setstyles(x)

    setstyles((prev) => ({
      ...prev,
      h1: {
        ...prev.h1,
        color: 'green',
        fontSize: 32
      },
      pp: {
        ...prev.pp,
        fontSize: 19
      }
    }))
  }
  function resetstyles() {
    setstyles(ss)
  }

  return (
    <div>
      <button onClick={changeclr1}>Change color 1</button>
      <button onClick={changeclr2}>Change color 2</button>
      <button onClick={resetstyles}>Reset</button>
      <h1
        onMouseOver={() => {
          setstyles((prev) => (
            {
              ...prev,
              h1: {
                ...prev.h1,
                backgroundColor: 'pink'
              }
            }
          )
          )
        }}
        onMouseLeave={() => {
          setstyles((prev) => (
            {
              ...prev,
              h1: {
                ...prev.h1,
                backgroundColor: ss.h1.backgroundColor
              }
            }
          )
          )
        }}
        style={styles.h1}
        id='myh1'
      >
        hello world {JSON.stringify(styles.h1)}</h1>
      <h3 style={styles.h3} id='myh2'>hello world {JSON.stringify(styles.h3)}</h3>
      <p style={styles.pp}>hello world {JSON.stringify(styles.pp)}</p>

      <hr />

      <input type="text" id='fname' />
      <hr />
      <button className='hai' onClick={addcls}>Add class</button>
      <button className='hai' onClick={removecls}>Remove class</button>
      <button className='hello' onClick={collapse}>Remove class</button>
      <table className='ui table' id='table'>
        <tbody>
          <tr>
            <td>hello</td>
            <td>hai</td>
            <td>bye</td>
          </tr>
          <tr>
            <td>hello</td>
            <td>hai</td>
            <td>bye</td>
          </tr>
          <tr>
            <td>hello</td>
            <td>hai</td>
            <td>bye</td>
          </tr>
          <tr>
            <td>hello</td>
            <td>hai</td>
            <td>bye</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <input type="text" ref={fname} />
      <button onClick={handleBtn}>change value</button>

      <hr />

      <SpecialButton>BOXX</SpecialButton>
      <SpecialButton>BOXX</SpecialButton>
      <SpecialButton>BOXX</SpecialButton>
      <SpecialButton>hai</SpecialButton>
      <SpecialButton>HEllo </SpecialButton>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
