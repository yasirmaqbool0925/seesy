import React from 'react'
import { useNavigate } from 'react-router-dom'

const Career = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/')
  }
  const gotoContact = () => {
    navigate('/contact')
  }
  return (
    <div className='career'>
      <h1>Career</h1>
      <button type='button' className='upload' onClick={() => gotoHome()}>Go back to Home</button>
      <button type='button' className='upload' onClick={() => gotoContact()}>Go to Contact Us</button>
    </div>
  )
}

export default Career
