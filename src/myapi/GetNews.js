import React, { useEffect, useState } from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

export default function GetNews() {
  const [list, setlist] = useState([])
  const [n, setn] = useState(0)
  const [loading, setloading] = useState(true)

  const count = 10
  useEffect(() => {
    let data = {
      _fields: 'title,jetpack_featured_media_url,date',
      offset: n,
      per_page: count
    }
    const params = new URLSearchParams(data).toString()
    const url = 'https://telugunewsadda.com/wp-json/wp/v2/posts?' + params
    setloading(true)
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setlist(json)
        setloading(false)
      })
  }, [n])

  function handlenext() {
    if (n >= 50) {
      return
    }
    setn(n + count)
  }
  function handleprev() {
    if (n <= 0) {
      return
    }
    setn(n - count)
  }
  return (
    <div>
      <h2>News Articles</h2>

      <div style={{ paddingBottom: 20 }}>
        {n > 0 && <Button color='blue' onClick={handleprev}>Previous</Button>}
        {n < 50 && <Button color='blue' onClick={handlenext}>Next</Button>}
      </div>

      {loading ?

        <div style={{ padding: 50 }}>
          <Icon name='spinner' loading size='huge' />
        </div>

        :

        <Card.Group itemsPerRow={5}>
          {
            list.map((item) => {
              return (
                <Card>
                  <Image src={item.jetpack_featured_media_url} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{item.title.rendered}</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='calendar alternate outline' />
                      {item.date.slice(0, 10)}
                    </a>
                  </Card.Content>
                </Card>
              )
            })
          }
        </Card.Group>
      }
    </div>
  )
}
