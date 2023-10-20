import React from 'react'
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

export default function MainMenu() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuItems />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="books" element={<Books />} />
            <Route path="calc" element={<Arthematic />} />
            <Route path="modal" element={<ModalBox />} />
            <Route path="loadnews" element={<LoadNews />} />
            <Route path="todolist" element={<TodoList />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="getnews" element={<GetNews />} />
            <Route path="students" element={<StudentsList />} />
            <Route path="TodoListProps" element={<TodoListProps />} />
            <Route path="TodoListEditable" element={<TodoListEditable />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
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

        <Menu.Item as={Link} to='/about'>
          About
        </Menu.Item>

        <Menu.Item as={Link} to='/books'>
          Books
        </Menu.Item>

        <Menu.Item as={Link} to='/calc'>
          Calculator
        </Menu.Item>

        <Menu.Item as={Link} to='/modal'>
          Modal
        </Menu.Item>

        <Menu.Item as={Link} to='/loadnews'>
          Load News
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
        <Menu.Item as={Link} to='/TodoListProps'>
          TodoListProps
        </Menu.Item>
        <Menu.Item as={Link} to='/TodoListEditable'>
          TodoListEditable
        </Menu.Item>

      </Menu>

      <Outlet />
    </>
  )
}