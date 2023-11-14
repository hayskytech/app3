import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App';
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { Button } from 'semantic-ui-react';

export default function OnlineTodos() {
  const { user, setUser } = useContext(UserContext);
  const [item, setItem] = useState('')
  const [list, setlist] = useState([])

  function writeUserData() {
    const db = getDatabase()
    // set(ref(db, 'todos/' + user.uid), { todos: item });
    const postListRef = ref(db, 'todos/' + user.uid);
    const newPostRef = push(postListRef);
    set(newPostRef, item);
    setItem('')
  }

  useEffect(() => {
    const db = getDatabase()
    if (user) {
      const starCountRef = ref(db, 'todos/' + user.uid)
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setlist(Object.entries(data))
        } else {
          console.log('no data');
        }
      });
    }
  }, [user])

  return (
    <div>
      Todo Item: <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />

      <Button color='blue' onClick={writeUserData}>Submit</Button>

      <hr />

      <h3>Todos</h3>
      <ol>
        {list.map((item) => {
          return (<li key={item[0]}>{item[1]}</li>)
        })}
      </ol>
    </div>
  )
}
