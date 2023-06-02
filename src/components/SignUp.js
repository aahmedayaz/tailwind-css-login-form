import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
        <div className="flex flex-col">
            <h1 className="login-heading font-bold text-4xl">Sign Up</h1>
            <p className="intro-para mt-[10px]">Welcome ! Please Enter your details</p>
            <input type="text" className="email-input border-b-2 border-solid border-black px-[15px] py-[10px] mt-[40px]" id='name' placeholder='Enter your Name'/>
            <input type="email" className="email-input border-b-2 border-solid border-black px-[15px] py-[10px] mt-[15px]" id="email" placeholder="Enter your Email"/>
            <input type="password" className="password-input border-b-2 border-solid border-black px-[15px] py-[10px] mt-[15px]" id="password" placeholder="Enter your Password"/>
            <button className="Login-btn mt-[15px] bg-emerald-900 text-white py-[10px]" id="login-btn">Sign Up</button>
            <div className='mt-[20px]'>
                <span className="">Aready have an account ? </span>
                <span className="underline cursor-pointer"><NavLink to='/'>Login Here</NavLink></span>
            </div>
        </div>
    </>
  )
}

export default SignUp