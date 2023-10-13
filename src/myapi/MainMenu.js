import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import Books from './Books'
import { Menu } from 'semantic-ui-react'
import Arthematic from '../pages/Arthematic'
import ModalBox from '../pages/ModalBox'

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

      </Menu>

      <Outlet />
    </>
  )
}