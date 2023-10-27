import React, { createContext, useState } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import Books from './Books'
import { Menu } from 'semantic-ui-react'
import Arthematic from '../pages/Arthematic'
import ModalBox from '../pages/ModalBox'
import LoadNews from './LoadNews'
import TodoList from './TodoList'
import MyProfile from './MyProfile'
import GetNews from './GetNews'
import StudentsList from '../props/StudentsList'
import TodoListProps from '../props/TodoListProps'
import TodoListEditable from './TodoListEditable'
import TodoListMultiField from '../props/TodoListMultiField'
import DOM from '../props/DOM'
import Nested from '../advanced/Nested'

export const UserContext = createContext('defaultValue')
export const ThemeContext = createContext('')

export default function MainMenu() {
  const [user, setUser] = useState("Apple")
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <UserContext.Provider value={{ user, setUser, age: 20 }} >
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MenuItems />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="book" element={<Books />} />
                <Route path="dom" element={<DOM />} />
                <Route path="calc" element={<Arthematic />} />
                <Route path="modal" element={<ModalBox />} />
                <Route path="loadnews" element={<LoadNews />} />
                <Route path="todolist" element={<TodoList />} />
                <Route path="myprofile/:userid" element={<MyProfile />} />
                <Route path="getnews" element={<GetNews />} />
                <Route path="students/:id/:name" element={<StudentsList />} />
                <Route path="students/:id" element={<StudentsList />} />
                <Route path="students" element={<StudentsList />} />
                <Route path="nested" element={<Nested />} />
                <Route path="TodoListProps" element={<TodoListProps />} />
                <Route path="TodoListEditable" element={<TodoListEditable />} />
                <Route path="TodoListMultiField" element={<TodoListMultiField />} />
                {/* <Route path="*" element={<NoPage />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </UserContext.Provider>

    </div>
  )
}

function MenuItems() {
  return (
    <>
      <Menu>

        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item as={Link} to='/dom'>
          DOM
        </Menu.Item>
        <Menu.Item as={Link} to='/about'>
          about
        </Menu.Item>
        <Menu.Item as={Link} to='/book'>
          Book
        </Menu.Item>

        <Menu.Item as={Link} to='/todolist'>
          Todo List
        </Menu.Item>
        <Menu.Item as={Link} to='/myprofile'>
          My Profile
        </Menu.Item>
        <Menu.Item as={Link} to='/getnews'>
          Get News
        </Menu.Item>
        <Menu.Item as={Link} to='/students'>
          Students
        </Menu.Item>
        <Menu.Item as={Link} to='/nested'>
          Nested
        </Menu.Item>
        <Menu.Item as={Link} to='/TodoListProps'>
          TodoListProps
        </Menu.Item>
        <Menu.Item as={Link} to='/TodoListEditable'>
          TodoListEditable
        </Menu.Item>
        <Menu.Item as={Link} to='/TodoListMultiField'>
          TodoListMultiField
        </Menu.Item>

      </Menu>

      <Outlet />
    </>
  )
}





