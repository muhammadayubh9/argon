import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
      <p>@ 2021, Made with ❤️ by <Link to="#">Creative Tim</Link> & <Link to="#">Simmmple</Link> for a better web</p>
      <div className="footer_right">
        <Link to="#">Creative Tim</Link>
        <Link to="#">Simmmple</Link>
        <Link to="#">Blog</Link>
        <Link to="#">License</Link>
      </div>
    </div>
  )
}

export default Footer