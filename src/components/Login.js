import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className="flex flex-col">
            <h1 className="login-heading font-bold text-4xl">Login</h1>
            <p className="intro-para mt-[10px]">Welcome Back ! Please Enter your details</p>
            <input type="email" className="email-input border-b-2 border-solid border-black px-[15px] py-[10px] mt-[40px]" id="email" placeholder="Enter your Email"/>
            <input type="password" className="password-input border-b-2 border-solid border-black px-[15px] py-[10px] mt-[15px]" id="password" placeholder="Enter your Password"/>
            <button className="Login-btn mt-[15px] bg-emerald-900 text-white py-[10px]" id="login-btn">Login</button>
            <div className='mt-[20px]'>
                <span className="">Didn't have an account ? </span>
                <span className="underline cursor-pointer"><NavLink to='/signup'>Sign up for Free</NavLink></span>
            </div>
        </div>
    </>
  )
}

export default Login