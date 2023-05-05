import React from 'react'
import '../css/Sidebar.css'
import {NavLink} from "react-router-dom"
import { motion } from "framer-motion";
import { useState } from "react";
import {FaBars, FaHome, FaUsers, FaClipboard,FaClipboardList,FaCubes,FaHandshake,FaChevronCircleRight,FaRegCreditCard,FaMoneyCheck} from "react-icons/fa";
const SidebarData =[
  {
    icon: FaHome,
    heading: "Dashboard",
    path: "/admin/Dashboard",
  },
  {
    icon: FaUsers,
    heading: "User",
    path: "/UserDB",
  },
  {
    icon: FaClipboard,
    heading: "Product",
    path: "/ProductDB",
  },
  {
    icon: FaClipboardList,
    heading: "Orders",
    path: "/OrdersDB",
  },
  {
    icon: FaCubes,
    heading: "Inventory",
    path: "/InventoryDB",
  },
  {
    icon: FaHandshake,
    heading: "Suppliers",
    path: "/SuppliersDB",
  },
  {
    icon: FaClipboard,
    heading: "Feedback",
    path: "/FeedbackDB",
  },
  {
    icon:FaRegCreditCard,
    heading: "Payment",
    path: "/PaymentDB",
  },
  {
    icon: FaMoneyCheck,
    heading: "Suppliers Payment",
    path: "/Suppliers_paymentDB",
  },
];
const Sidebar = () => {

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
     <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <FaBars/>
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >

    
  

        <div className="logo">
            <span>FOODIE</span>
        </div>
        {/* menu */}
        <div className="menu">
            {SidebarData.map((item,index)=>{
              return(
                <div className="menuItem">
                  
                  <NavLink to={item.path} key={index}
                  className={navClass => navClass.isActive ? 'menuItem active' 
                : 'menuItem'}
                   >
                   <div className='icon'> <item.icon/></div>
                    <span>{item.heading}</span>
                  </NavLink>
                </div>
              )
            })}
            <div className="menuItem">
              <FaChevronCircleRight/>
            </div>
          </div>

    </motion.div>
    </>
  );
};

export default Sidebar
