import React from 'react'
import Sidebar from './Components/Sidebar.jsx'
import Player from './Components/Player.jsx'
import Display from './Components/Display.jsx'
function App() {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[91%] flex'>
        <Sidebar />
        <Display />
      </div>
        <Player />
    </div>
  )
}

export default App
