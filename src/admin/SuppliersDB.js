import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Suppliersdata from './Suppliersdata'
const SuppliersDB = () => {
  return (
    <div className='background'>
    <div className='glass-bg'>
      <Sidebar/>
      <Suppliersdata/>
      
    </div>
  </div>
  )
}

export default SuppliersDB
