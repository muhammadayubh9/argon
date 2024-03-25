import React from 'react'
import "./NotFound.scss"
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div class="not_found">
        <img src="https://via.placeholder.com/600" alt="Lost in Space" class="illustration" />
        <h1>Oops! Page Not Found</h1>
        <p>We're sorry, but the page you're looking for cannot be found.</p>
        <p>But hey, why not <Link to="/" href="/">return to our home page</Link> and explore some of our other amazing content?</p>
    </div>
  )
}

export default NotFound