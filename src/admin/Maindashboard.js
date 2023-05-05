import React from 'react'
import Cards from './Cards'
import '../css/Maindashboard.css'
import DB_Table from './DB_Table'
const Maindashboard = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards/>
      <DB_Table/>
    </div>
  )
}

export default Maindashboard
