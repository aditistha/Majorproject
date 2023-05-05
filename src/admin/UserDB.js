import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Userdata from './Userdata'
const UserDB = () => {
  return (
    <div className='background'>
      <div className='glass-bg'>
        <Sidebar/>
        <Userdata/>
        
      </div>
    </div>
  )
}

export default UserDB
