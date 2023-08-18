import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/')
  }
  const gotoAbout = () => {
    navigate('/about')
  }
  return (
    <div className='services'>
      <h1>Services</h1>
      <button type='button' className='upload' onClick={() => gotoHome()}>Go back to Home</button>
      <button type='button' className='upload' onClick={() => gotoAbout()}>Go to About Us</button>
    </div>
  )
}

export default Services
