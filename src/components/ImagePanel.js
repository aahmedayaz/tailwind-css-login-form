import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../images/lefi-panel.json'

const ImagePanel = () => {
  return (
    <>
        <div className="w-[50%] h-screen px-[50px] bg-yellow-300">
            <Lottie animationData={animationData}/>
        </div>
    </>
  )
}

export default ImagePanel