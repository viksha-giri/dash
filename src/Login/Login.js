import React from 'react'
import "./Login.css"
import logo from "../assets/images/logo.png"
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <>
    <div className='Login_form'>
     <div className='container'>
     <div className='main-body'>
                <div className="logo-div">
               <img src={logo} className="img-fluid" alt="logo" />
                </div>
                <div className="login-body">
                    <h2>Login</h2>
                    <p>Continue to Login</p>
                    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control login-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control login-input" id="exampleInputPassword1" placeholder="Password"/>
  </div>

    <Link to="/dashboard"><button className="login-btn" >Login</button></Link>
</form>
                  
                </div>
            </div>
        </div> 
        </div>
    </>
  )
}

export default Login
