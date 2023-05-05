import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Feedbackdata from './Feedbackdata'
const FeedbackDB = () => {
  return (
    <div className='background'>
    <div className='glass-bg'>
      <Sidebar/>
      <Feedbackdata/>
      
    </div>
  </div>
  )
}

export default FeedbackDB
