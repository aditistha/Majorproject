import React from 'react'
import '../css/Dashboard.css'
import Sidebar from './Sidebar'
import Productdata from './Productdata'

const ProductDB = () => {
  return (
    <div>
       <div className='background'>
      <div className='glass-bg'>
        <Sidebar/>
        <Productdata/>
        
      </div>
    </div>
    </div>
  )
}

export default ProductDB

