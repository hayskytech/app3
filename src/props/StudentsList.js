import React from 'react'
import Student from './Student'
import StuCard from './StuCard'
import { Card } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

export default function StudentsList() {
  let { id, name } = useParams()
  const data = [
    { name: "Raju", phone: '+911235679' },
    { name: "Ramu", phone: '+911235679' },
    { name: "Mahesh", phone: '+911235679' },
    { name: "apple", phone: '+911235679' },
    { name: "bat", phone: '+911235679' },
    { name: "cat", phone: '+91123465798' },
  ]
  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <Card.Group itemsPerRow={5}>
        {data.map((item) => <StuCard item={item} />)}
      </Card.Group>
    </div>
  )
}