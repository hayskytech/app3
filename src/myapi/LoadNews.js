import React, { useEffect, useState } from 'react'

export default function LoadNews() {
  const [list, setlist] = useState([])

  // () => {}

  useEffect(() => {
    fetch('https://telugunewsadda.com/wp-json/wp/v2/posts?_fields=id,title,date')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setlist(json)
      })
  }, [])



  return (
    <div>
      {/* {JSON.stringify(list)} */}

      {
        list.map((item) => {
          const x = item.date.replaceAll('T', ' ')
          return (
            <>
              <p>{item.title.rendered} <br /> {x}</p>
            </>
          )
        })
      }

    </div>
  )
}
