
import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Paymentdata from './Paymentdata'
const PaymentDB = () => {
  return (
    <div className='background'>
      <div className='glass-bg'>
        <Sidebar/>
        <Paymentdata/>
        
      </div>
    </div>
  )
}

export default PaymentDB
