import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/')
  }
  const gotoCareer = () => {
    navigate('/career')
  }
  return (
    <div className='about'>
      <h1>About Us</h1>
      <button type='button' className='upload' onClick={() => gotoHome()}>Go back to Home</button>
      <button type='button' className='upload' onClick={() => gotoCareer()}>Go to Career</button>
    </div>
  )
}

export default About
