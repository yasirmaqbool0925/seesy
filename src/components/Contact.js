import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/')
  }
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <button type='button' className='upload' onClick={() => gotoHome()}>Go back to Home</button>
    </div>
  )
}

export default Contact
