import React from 'react'
import ProPic from '../src/assets/image.png'

const TopProfile = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center'>
        <img src={ProPic} className='w-[4rem] h-[5rem] rounded-[50%] scale-[1.3]' alt="" />
        <span className='text-[#ffffff] text-[1rem] mt-5'>Abdulquddus Muhammad</span>
        <span className='text-[#c4f82a] text-[11px] mt-1.5 font-bold'>Nigeria, Niger State</span>
        <span className='text-[#ffffff] text-[.8rem] mt-4 font-thin'>"Front-End Developer and Avid Gamer"</span>
    </div>
  )
}

export default TopProfile