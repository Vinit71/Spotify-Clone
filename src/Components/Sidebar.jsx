import React from 'react'
import {assets} from '../assets/assets'

function Sidebar() {
  return (
   <>
   <div className='pl-3 w-[25%] text-white rounded h-screen'>
    <div className='pt-2 pl-4 h-[15%] bg-[#121212] flex flex-col justify-center cursor-pointer'>
      <div className='flex'>
        <img className='w-8 h-8 ' src={assets.Home} alt="" />
        <p className='pl-3'>Home</p>
      </div>
      <div className='flex'>
        <img className='w-8 h-8'  src={assets.Search} alt="" />
        <p className='pl-3'>Search</p>
      </div>
    </div>

    <div className='h-[84%] bg-[#121212] text-white rounded mt-1'>
      <div className='p-4 flex items-center justify-between'>
      <div className='flex items-center gap-3 cursor-pointer'>
        <img className='w-8 h-8' src={assets.Home} alt="" />
        <p>Your Library</p>
        </div>
        <div className='flex justify-end gap-3'>
        <img className='w-8 h-8 cursor-pointer' src={assets.Home} alt="" />
        <img className='w-8 h-8 cursor-pointer' src={assets.Home} alt="" />
        </div>
      </div>
   </div>
   </div>
   </>
  )
}

export default Sidebar
