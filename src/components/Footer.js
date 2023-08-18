import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="content-box">
          <div className="text-box">
            <p>Record a video for the role<span>Max file size 3MB</span></p>
          </div>
          <div className="btn-holder">
            <button type='button' className='use'>Use your computer camera</button>
            <button type='button' className='upload'>Upload a video</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
