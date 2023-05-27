import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Menu from '../pages/Menu'
import Dashboard from '../admin/Dashboard'
import UserDB from '../admin/UserDB'
import ProductDB from '../admin/ProductDB'
import OrdersDB from '../admin/OrdersDB'
import InventoryDB from '../admin/InventoryDB'
import SuppliersDB from '../admin/SuppliersDB'
import FeedbackDB from '../admin/FeedbackDB'
import PaymentDB from '../admin/PaymentDB'
import Suppliers_paymentDB from '../admin/Suppliers_paymentDB'
import RegisterDB from '../admin/RegisterDB'
import Login from '../pages/Login'
import Adminlogin from '../admin/Adminlogin'
import Admin_profileDB from '../admin/Admin_profileDB'
const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/Home'/>}/>
    <Route path='/Home' element={<Home/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Menu' element={<Menu/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/admin/Dashboard' element={<Dashboard/>} />
    <Route path='/UserDB' element={<UserDB/>} />
    <Route path='/ProductDB' element={<ProductDB/>} />
    <Route path='/OrdersDB' element={<OrdersDB/>} />
    <Route path='/InventoryDB' element={<InventoryDB/>} />
    <Route path='/SuppliersDB' element={<SuppliersDB/>} />
    <Route path='/FeedbackDB' element={<FeedbackDB/>} />
    <Route path='/PaymentDB' element={<PaymentDB/>} />
    <Route path='/Suppliers_paymentDB' element={<Suppliers_paymentDB/>} />
    <Route path='/RegisterDB' element={<RegisterDB/>} />
    <Route path='/Adminlogin' element={<Adminlogin/>} />
    <Route path='/Admin_profileDB' element={<Admin_profileDB/>} />
  </Routes>
}

export default Routers
