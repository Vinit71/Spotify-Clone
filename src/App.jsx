import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar.jsx'
import Player from './Components/Player.jsx'
import Display from './Components/Display.jsx'
import { PlayerContext } from './Context/PlayerContext.jsx'
function App() {

  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className='w-full h-screen bg-black'>
      <div className='h-[91%] flex'>
        <Sidebar />
        <Display />
      </div>
        <Player />
        {/* here it is */}
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App