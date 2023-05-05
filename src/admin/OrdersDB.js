import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Orderdata from './Orderdata'

const OrdersDB = () => {
  return (
       <div className='background'>
      <div className='glass-bg'>
        <Sidebar/>
        <Orderdata/>
        
      </div>
    </div>
  )
}

export default OrdersDB
