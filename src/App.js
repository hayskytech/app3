import React, { createContext, useEffect, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './myapi/HomePage'
import AboutPage from './myapi/AboutPage'
import Books from './myapi/Books'
import { Menu } from 'semantic-ui-react'
import Arthematic from './pages/Arthematic'
import ModalBox from './pages/ModalBox'
import LoadNews from './myapi/LoadNews'
import TodoList from './myapi/TodoList'
import MyProfile from './myapi/MyProfile'
import GetNews from './myapi/GetNews'
import StudentsList from './props/StudentsList'
import TodoListProps from './props/TodoListProps'
import TodoListEditable from './myapi/TodoListEditable'
import TodoListMultiField from './props/TodoListMultiField'
import DOM from './props/DOM'
import Nested from './advanced/Nested'
import OTPLogin from './fb/OTPLogin'
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { auth } from './fb/firebase'
import OnlineTodos from './fb/OnlineTodos'
import Students from './sqldb/Students'
import SQLLogin from './sqldb/SQLLogin'
import SQLRegister from './sqldb/SQLRegister'

export const UserContext = createContext('defaultValue')
export const ThemeContext = createContext('')

export default function App() {
  let x = { username: '', token: '' }
  // SQLite user login check
  if (localStorage.getItem('token')) {
    x = JSON.parse(localStorage.getItem('token'))
  }

  const [user, setUser] = useState(x)
  const [theme, setTheme] = useState('light')

  // Firebase Authentication
  // useEffect(() => {
  //   const unsubscribeAuthState = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });
  //   const unsubscribeIdToken = onIdTokenChanged(auth, (user) => {
  //     setUser(user);
  //   });
  //   return () => {
  //     unsubscribeAuthState();
  //     unsubscribeIdToken();
  //   };
  // }, [auth]);


  return (
    <div>
      <UserContext.Provider value={{ user, setUser }} >
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MenuItems user={user} />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="book" element={<Books />} />
                <Route path="dom" element={<DOM />} />
                <Route path="calc" element={<Arthematic />} />
                <Route path="modal" element={<ModalBox />} />
                <Route path="loadnews" element={<LoadNews />} />
                <Route path="todolist" element={<TodoList />} />
                <Route path="myprofile/:userid" element={<MyProfile />} />
                <Route path="myprofile" element={<MyProfile />} />
                <Route path="getnews" element={<GetNews />} />
                <Route path="students/:id/:name" element={<StudentsList />} />
                <Route path="students/:id" element={<StudentsList />} />
                <Route path="students" element={<StudentsList />} />
                <Route path="nested" element={<Nested />} />
                <Route path="TodoListProps" element={<TodoListProps />} />
                <Route path="TodoListEditable" element={<TodoListEditable />} />
                <Route path="TodoListMultiField" element={<TodoListMultiField />} />
                <Route path="account" element={<OTPLogin />} />
                <Route path="onlinetodo" element={<OnlineTodos />} />
                <Route path='studentslist' element={<Students />} />
                <Route path='sqllogin' element={<SQLLogin />} />
                <Route path='sqlregister' element={<SQLRegister />} />
                {/* <Route path="*" element={<NoPage />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </UserContext.Provider>

    </div>
  )
}

function MenuItems(p) {
  return (
    <>
      <Menu>

        <Menu.Item><Link to="/">Home</Link></Menu.Item>
        {!p.user?.token &&
          <>
            <Menu.Item as={Link} to='/sqllogin'>SQL Login</Menu.Item>
            <Menu.Item as={Link} to='/sqlregister'>SQL Register</Menu.Item>
          </>
        }
        <Menu.Item as={Link} to='/dom'>DOM</Menu.Item>
        <Menu.Item as={Link} to='/about'>about</Menu.Item>
        <Menu.Item as={Link} to='/book'>Book</Menu.Item>
        <Menu.Item as={Link} to='/todolist'>Todo List</Menu.Item>
        <Menu.Item as={Link} to='/onlinetodo'>Online Todo List</Menu.Item>
        <Menu.Item as={Link} to='/myprofile'>My Profile</Menu.Item>
        <Menu.Item as={Link} to='/getnews'>Get News</Menu.Item>
        <Menu.Item as={Link} to='/studentslist'>Students</Menu.Item>
        <Menu.Item as={Link} to='/nested'>Nested</Menu.Item>
        <Menu.Item as={Link} to='/TodoListProps'>TodoListProps</Menu.Item>
        <Menu.Item as={Link} to='/TodoListEditable'>TodoListEditable</Menu.Item>
        <Menu.Item as={Link} to='/TodoListMultiField'>TodoListMultiField</Menu.Item>
        <Menu.Item as={Link} to='/account'>Account</Menu.Item>

      </Menu>

      <Outlet />
    </>
  )
}





