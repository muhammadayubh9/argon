import React from 'react'
import LoginHead from '../../Components/LoginHead/LoginHead'
import LoginFoot from '../../Components/LoginFoot/LoginFoot'
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom'
function Login() {

  var navigate = useNavigate()
  return (
    <section className='login'>
      <LoginHead/>
        <div className="login__in">
          <div className="login__with">
            <h3>Sign In with</h3>
            <div className="login__icons">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-apple"></i>
              <i class="bi bi-google"></i>
            </div>
            <p className="or"> or</p>
          </div>
            <form className='form'>
              <div class="group">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Your full name" id='name' />
              </div>
              <div class="group">
                <label htmlFor="password">Password</label>
                <input type="text" placeholder="Your password" id='password' />
              </div>
              <div className="togle">
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <h3>Remember me</h3> 


              </div>
            </form>
            <button className="sign__btn" onClick={()=> navigate('/')}>SIGN IN</button>
            <div className="log__out">
                <p>Don’t have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </div>
      <LoginFoot/>
    </section>
  )
}

export default Login