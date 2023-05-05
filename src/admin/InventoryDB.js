import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Inventorydata from './Inventorydata'

const InventoryDB = () => {
  return (
    <div className='background'>
    <div className='glass-bg'>
      <Sidebar/>
      <Inventorydata/>
      
    </div>
  </div>
  )
}

export default InventoryDB
