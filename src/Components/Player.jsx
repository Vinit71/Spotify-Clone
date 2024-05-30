import React from 'react'
import { assets } from '../assets/assets'
import { songsData } from '../assets/assets'
function Player() {
  return (
    <div className='flex bg-black text-white'>
      <div className='pl-4 h-[10%] flex'>
        <img className='w-12 h-12' src={songsData[0].image} alt="" />
        <div className='pl-2'>
            <h2>{songsData[0].name}</h2>
            <p className='font-light'>{songsData[0].desc}</p>
        </div>
        <img className='w-4 ml-3.5 mt-1 cursor-pointer' src={assets.circularPlusIcon} alt="" />
      </div>

      <div className='flex flex-col items-center m-auto gap-3'>
        <div className='flex gap-3'>
        <img className='w-5 h-5 cursor-pointer' src={assets.shuffleIcon} alt="" />
        <img className='w-5 h-5 cursor-pointer' src={assets.backwardIcon} alt="" />
        <img className='w-5 h-5 cursor-pointer' src={assets.playIcon} alt="" />
        <img className='w-5 h-5 cursor-pointer' src={assets.forwardIcon} alt="" />
        <img className='w-5 h-5 cursor-pointer' src={assets.repeatIcon} alt="" />
      </div>
      <div className='flex items-center gap-3'>
        <p>1:06</p>
        <div className='w-[60vw] max-w-[500px] bg-white rounded-full cursor-pointer'>
        <hr className='h-1 w-[60%] bg-green-600'/>
        </div>
        <p>4:47</p>
      </div>
      </div>

      <div className='pt-7 pr-4 flex items-center gap-2'>
        <img className='w-5 h-5 cursor-pointer' src={assets.playingViewIcon} alt="" />
        <img className='w-5 h-5 cursor-pointer' src={assets.micIcon} alt="" />
        <img className='w-5 h-5 cursor-pointer' src={assets.queueIcon} alt="" />
        <img className='w-5 h-5 cursor-pointer' src={assets.deviceIcon} alt="" />
        <img className='w-5 h-5 cursor-pointer' src={assets.speakerIcon} alt="" />
        <div className='w-[4vw] cursor-pointer h-1 bg-white rounded-full'></div>
        <img className='w-5 h-5 cursor-pointer' src={assets.fullScreenIcon} alt="" />
        {/* <img className='w-5 h-5' src={assets.homeIcon} alt="" /> */}
      </div>
    </div>
  )
}

export default Player
