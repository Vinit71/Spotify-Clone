import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'
function Player() {
  const {seekBg, seekBar, playerStatus, play, pause, track, time, previous, next, seekSong} = useContext(PlayerContext)
  return (
    <div className='flex bg-black text-white'>

      <div className='pl-4 h-[10%] flex hidden md:flex'>
        <img className='w-12 h-12' src={track.image} alt="" />
        <div className='pl-2'>
            <h2>{track.name}</h2>
            <p className='font-light'>{track.desc}</p>
        </div>
        <img className='w-4 ml-3.5 mt-1 cursor-pointer' src={assets.circularPlusIcon} alt="" />
      </div>

      <div className='flex flex-col items-center m-auto gap-3'>
        <div className='flex gap-3'>
        <img className='w-5 h-5 cursor-pointer' src={assets.shuffleIcon} alt="" />
      <img onClick={previous} className='w-5 h-5 cursor-pointer' src={assets.backwardIcon} alt="" />

        {playerStatus ? <img onClick={pause} className='w-5 h-5 cursor-pointer' src={assets.pauseIcon} alt="" /> 
        : <img onClick={play} className='w-5 h-5 cursor-pointer' src={assets.playIcon} alt="" />
        }
        
        
        <img onClick={next} className='w-5 h-5 cursor-pointer' src={assets.forwardIcon} alt="" />
        <img className='w-5 h-5 cursor-pointer' src={assets.repeatIcon} alt="" />
      </div>
      <div className='flex items-center gap-3'>
        <p>{time.currentTime.minute}:{time.currentTime.second}</p>
        <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-white rounded-full cursor-pointer'>
        <hr ref={seekBar} className='h-1 w-[0%] bg-green-600'/>
        </div>
        <p>{time.totalTime.minute}:{time.totalTime.second}</p>
      </div>
      </div>

      <div className='pt-7 pr-4 flex items-center gap-2 hidden md:flex'>
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