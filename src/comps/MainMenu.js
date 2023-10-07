import React, { useState } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import Home from './Home'
import About from './About'

export default function MainMenu() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuItems />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function MenuItems() {
  const [item, setitem] = useState('home')
  return (
    <>
      <Menu>
        <Menu.Item
          name='home'
          active={item === 'home'}
          onClick={() => { setitem('home') }}
          as={Link}
          to='/'
        >
          Home
        </Menu.Item>
        <Menu.Item
          name='about'
          active={item === 'about'}
          onClick={() => { setitem('about') }}
          as={Link}
          to='/about'
        >
          About
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  )
}