import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className='error'>
      <h1>Error 404!</h1>
      <h3>Page not found.</h3>
      <button type='button' className='upload' onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Error
