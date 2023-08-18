import React from 'react'
import logo from '../assets/images/logo.svg'
import chat from '../assets/images/chat.svg'
import alert from '../assets/images/alert.svg'
import settings from '../assets/images/settings.svg'
import user from '../assets/images/user.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="logo">
          <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
        </div>
        <div className="navlinks">
          <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/career">Career</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="navicons">
          <img src={chat} alt="chat" />
          <img src={alert} alt="alert" />
          <img src={settings} alt="settings" />
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  )
}

export default Header
