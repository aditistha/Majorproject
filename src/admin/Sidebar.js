import React from 'react'
import '../css/Sidebar.css'
import {FaHome, FaUsers, FaClipboard,FaClipboardList,FaCubes,FaHandshake,FaChevronCircleRight,FaRegCreditCard,FaMoneyCheck} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className='logo'>
            <span>FOODIE</span>
        </div>
        {/* menu */}
        <div className='menu'>
            <div className='menuItem'><div>
            <FaHome/> 
            </div>
            <span>Dashboard</span>
            </div>
            <div className='menuItem'><div>
            <FaUsers/> 
            </div>
            <span>User</span>
            </div>
            <div className='menuItem'><div>
            <FaClipboard/> 
            </div>
            <span>Product</span>
            </div>
            <div className='menuItem'><div>
            <FaClipboardList/> 
            </div>
            <span>Orders</span>
            </div>
            <div className='menuItem'><div>
            <FaCubes/> 
            </div>
            <span>Inventory</span>
            </div>
            <div className='menuItem'><div>
            <FaHandshake/> 
            </div>
            <span>Suppliers</span>
            </div>
            <div className='menuItem'><div>
            <FaClipboard/> 
            </div>
            <span>Feedback</span>
            </div>
            <div className='menuItem'><div>
            <FaMoneyCheck/> 
            </div>
            <span>Payment</span>
            </div>
            <div className='menuItem'><div>
            <FaRegCreditCard/> 
            </div>
            <span>Suppliers Payment</span>
            </div>
            <div className='menuItem'><div>
            <FaChevronCircleRight/> 
            </div>
            <span>Logout</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
