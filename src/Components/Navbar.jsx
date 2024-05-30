import React from 'react'
import { assets } from '../assets/assets'

function Navbar() {
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.leftArrowIcon} alt="" />
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.rightArrowIcon} alt="" />
        </div>

        <div className='flex items-center gap-3'>
            {/*This <p> hidden for smaller screens */}
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
            <p className='bg-black text-white rounded-2xl px-4 py-1 cursor-pointer'>Install App</p>
            <p className='bg-purple-500 text-black rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>V</p>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <p className='bg-white text-black rounded-2xl px-4 py-1 cursor-pointer'>All</p>
        <p className='bg-black text-white rounded-2xl px-4 py-1 cursor-pointer'>Music</p>
        <p className='bg-black text-white rounded-2xl px-4 py-1 cursor-pointer'>Podcast</p>
      </div>
    </>
  )
}

export default Navbar
