import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Maindashboard from './Maindashboard'
function Dashboard() {
  return (
    <div className='background'>
      <div className='glass-bg'>
        <Sidebar/>
        <Maindashboard/>
      </div>
    </div>
  )
}

export default Dashboard


