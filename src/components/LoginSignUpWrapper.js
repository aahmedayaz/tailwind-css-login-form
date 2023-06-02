import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import ImagePanel from './ImagePanel'

const LoginSignUpWrapper = ({type}) => {
  return (
    <>
        <div className="w-full h-screen flex">
            {/* Left Panel */}
            {type === 'Login' && <ImagePanel/>}
            {/* Right Panel */}
            <div className="w-[50%] h-screen p-[100px]">
                {type === 'Login' ? <Login/> : <SignUp/>}
            </div>
            {type === 'Signup' && <ImagePanel/>}
        </div>
    </>
  )
}

export default LoginSignUpWrapper