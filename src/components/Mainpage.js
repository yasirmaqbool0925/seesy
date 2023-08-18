import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Mainpage = () => {
  return (
    <div className='mainpage'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Mainpage
