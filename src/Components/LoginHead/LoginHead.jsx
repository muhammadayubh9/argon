import React from "react";
import "./LoginHead.scss";
import argon from "../../Assets/argon.png";
import { Link } from "react-router-dom";

function LoginHead() {
  return (
    <section className="login_header">
      <div className="container">
            <img src={argon} alt="" />
          <div className="nav__link">
            <Link className="link" to='/'>DASHBOARD</Link>
            <Link className="link" to='/profile'>PROFILE</Link>
            <Link className="link" to='/register'>SIGN UP</Link>
            <Link className="link" to='/login'>SIGN IN</Link>
    
          </div>
            <button>
              <h2>FREE DOWNLOAD</h2>
            </button>
      </div>
    </section>
  );
}

export default LoginHead;
