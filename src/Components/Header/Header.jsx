import React from 'react'
import "./Header.scss"
import { Link, useLocation } from 'react-router-dom'


function Header() {
  var loc = useLocation().pathname
  function pageDetect(){
    if(loc == "/"){
      return "Dashboard"
    }else if(loc == "/tables"){
      return "Tables"
    }else if(loc == "/billing"){
      return "Billing"
    }else if(loc == "/profile"){
      return "Profile"
    }
  }
  return (
    <div className='header'>
      <div className="header_left">
        <div className="pages_link">
          <Link to="/">Pages</Link>
          /
          <Link to="/tables">{pageDetect()}</Link>
        </div>
        <h4>{pageDetect()}</h4>
      </div>
      <div className="header_right">
        <div className="input_hover">
          <button><i className='bi bi-search'></i></button>
        <input type="text" placeholder='Type here...' />
        </div>
        <Link to="/login">
          <i className='bi bi-person-fill'></i>
          Sign In
        </Link>
        <button><i className='bi bi-gear-fill'></i></button>
        <button><i className='bi bi-bell-fill'></i></button>
      </div>
    </div>
  )
}

export default Header