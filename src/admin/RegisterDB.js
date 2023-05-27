import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Register from './Register'
const RegisterDB = () => {
  return (
    <div className='background'>
    <div className='glass-bg'>
      <Sidebar/>
      <Register/>
      
    </div>
  </div>
  )
}

export default RegisterDB
