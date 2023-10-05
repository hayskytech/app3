import React from 'react'

export default function Students() {

  const x = { color: "orange", fontSize: '30px' }
  return (
    <div>
      <h2 style={{ 'color': 'red' }}>jasbjahb</h2>
      <h2 style={{ color: 'red' }}>jasbjahb</h2>
      <h2 style={{ color: "red" }}>jasbjahb</h2>

      <h3 style={x}>hello world</h3>
      <h3 style={x}>hello world</h3>
      <h3 style={x}>hello world</h3>
      <h3 style={x}>hello world</h3>

      <p style={ss.para}>kasud asid hasi d</p>
      <p style={ss.para}>kasud asid hasi d</p>
      <p style={ss.para}>kasud asid hasi d</p>
      <p style={ss.para}>kasud asid hasi d</p>

      <h4 style={ss.h4}>sadukas  asd;</h4>

      <h5 style={ss.h5}>sadg aslud gas agsdlasd</h5>

    </div>
  )
}


const ss = {
  h4: {
    color: 'blue',
    backgroundColor: 'pink',
    fontSize: 30
  },
  h5: {
    textDecoration: 'underline'
  },
  para: {
    textAlign: 'center'
  }
}
