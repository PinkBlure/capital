import React from 'react'
import './Login.css'
import logo from '../../assets/logo.svg'
import eco from '../../assets/economia.jpg'

const Login = () => {
  return (
    <div>
      <img src={logo} alt='Capital Control' className='logo'/>
      <form className='container'>
        <label>Email:</label>
        <input type='email'/>
        <label>Password:</label>
        <input type='password'/>
        <button>Pa dentro</button>
      </form>
    </div>
  )
}

export default Login