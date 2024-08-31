import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate();
  return (
   <>
  <div className='pl-3 w-[25%] h-[97%] text-white rounded hidden sm:block'>

    <div className='pt-2 pl-4 h-[15%] bg-[#121212] flex flex-col justify-center gap-4 cursor-pointer mt-2'>
      <div onClick={()=>navigate('/')} className='flex'>
        <img className='w-7 h-7 ' src={assets.homeIcon} alt="" />
        <p className='pl-4'>Home</p>
      </div>
      <div className='flex'>
        <img className='w-7 h-7'  src={assets.searchIcon} alt="" />
        <p className='pl-4'>Search</p>
      </div>
    </div>

    <div className='h-[84%] bg-[#121212] text-white rounded mt-2'>
      <div className='p-4 flex items-center justify-between'>
      <div className='flex items-center gap-3 cursor-pointer'>
        <img className='w-8 h-8' src={assets.libraryIcon} alt="" />
        <p className='pl-1'>Your Library</p>
        </div>
        <div className='flex justify-end gap-3'>
        <img className='w-8 h-8 cursor-pointer' src={assets.rightIcon} alt="" />
        <img className='w-7 h-7 cursor-pointer' src={assets.plusIcon} alt="" />
        </div>
      </div>

      <div className=' p-4 bg-[#242424] mt-2 flex flex-col items-start gap-1 pl-4 rounded m-1.5'>
        <h1>Create your first playlist</h1>
        <p className='font-light'>It's easy we will help you</p>
        <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4 font-bold'>Create Playlist</button>
      </div>

      <div className=' p-4 bg-[#242424] mt-2 flex flex-col items-start gap-1 pl-4 rounded m-1.5 mt-5'>
        <h1>Let's find some Podcast to follow</h1>
        <p className='font-light'>We'll keep you update on new episodes</p>
        <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4 font-bold'>Browse Podcast</button>
      </div>
    </div>

  </div>
   </>
  )
}

export default Sidebar
