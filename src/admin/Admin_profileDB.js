import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Admin_profiledata from './Admin_profiledata'

const Admin_profileDB = () => {
  return (
    <div>
      <div className='background'>
    <div className='glass-bg'>
      <Sidebar/>
      <Admin_profiledata/>
      
    </div>
  </div>
    </div>
  )
}

export default Admin_profileDB
