import React from 'react'
import './nav.scss'
import DateTime from './dateTime'

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="public/navbar-icons/apple.svg" alt="" />
        </div>
        <div className="nav-items">
          <p>Tushita Vishwakarma</p>
        </div>
        <div className="nav-items">
          <p>File</p>
        </div>
        <div className="nav-items">
          <p>Window</p>
        </div>
        <div className="nav-items">
          <p>Terminal</p>
        </div>
      </div>
      <div className="right">
        <div className="nav-icon">
          <img src="dist/navbar-icons/wifi.svg" alt="" />
        </div>
        <div className="nav-items">
          <DateTime />
        </div>
      </div>
    </nav>
  )
}

export default Nav
