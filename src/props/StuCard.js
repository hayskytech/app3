import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const StuCard = (p) => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{p.item.name}</Card.Header>
      <Card.Description>
        {p.item.phone}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default StuCard