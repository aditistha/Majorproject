import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Supplier_paymentdata from './Supplier_paymentdata'
const Suppliers_paymentDB = () => {
  return (
    <div className='background'>
      <div className='glass-bg'>
        <Sidebar/>
        <Supplier_paymentdata/>
        
      </div>
    </div>
  )
}

export default Suppliers_paymentDB
