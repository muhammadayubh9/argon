import React from 'react'
import "./Sidebar.scss"
import Logo from "../../Assets/Logo.svg"
import { Link, useLocation } from 'react-router-dom'
import document from "../../Assets/document.svg"

function Sidebar() {
  var location = useLocation().pathname
  return (
      <div className='sidebar_hover'>
        <div className="sidebar">
          <img src={Logo} className='sidebar_logo' alt="" />
          <div className="lngr"></div>
          <Link to="/" className={location == "/" ? "item active" : "item"}>
            <i className='bi bi-house-door-fill'></i>
            <h3>Dashboard</h3>
          </Link>
          <Link to="/tables" className={location == "/tables" ? "item active" : "item"}>
            <i className='bi bi-bar-chart-fill'></i>
            <h3>Tables</h3>
          </Link>
          <Link to="/billing" className={location == "/billing" ? "item active" : "item"}>
            <i className='bi bi-credit-card-fill'></i>
            <h3>Billing</h3>
          </Link>
          <Link to="/rtl" className={location == "/rtl" ? "item active" : "item"}>
            <i className='bi bi-wrench-adjustable'></i>
            <h3>RTL</h3>
          </Link>
          <div className="item">
            <h3 style={{ color: "black" }}>ACCOUNT PAGES</h3>
          </div>
          <Link to="/profile" className={location == "/profile" ? "item active" : "item"}>
            <i className='bi bi-person-fill'></i>
            <h3>Profile</h3>
          </Link>
          <Link to="/login" className={location == "/login" ? "item active" : "item"}>
            <i className='bi bi-file-earmark-fill'></i>
            <h3>Sign In</h3>
          </Link>
          <Link to="/register" className={location == "/register" ? "item active" : "item"}>
            <i className='bi bi-rocket-takeoff-fill'></i>
            <h3>Sign Up</h3>
          </Link>
          <div className="document">
            <img src={document} alt="" />
            <h2>Need help?</h2>
            <h4>Please check our docs</h4>
            <Link to="#">DOCUMENTATION</Link>
            <Link to="#" className='upgrade'>UPGRADE TO PRO</Link>
          </div>
        </div>
      </div>
  )
}

export default Sidebar