import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Menu from '../pages/Menu'
import Login from '../pages/Login'
import Dashboard from '../admin/Dashboard'
const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/Home'/>}/>
    <Route path='/Home' element={<Home/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Menu' element={<Menu/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Dashboard' element={<Dashboard/>} />
  </Routes>
}

export default Routers
