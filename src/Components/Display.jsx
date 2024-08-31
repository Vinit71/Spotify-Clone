import React, { useEffect, useReducer, useRef } from 'react'
// import  {Routes} from 'react-router-dom'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumData } from '../assets/assets';
function Display() {

// for bakcground
const displayRef = useRef();
const location = useLocation();
const isAlbum = location.pathname.includes("album");
const albumId = isAlbum ? location.pathname.slice(-1) : "";
const bgColor = albumData[Number(albumId)].bgColor;

useEffect(()=>{
  if(isAlbum){
    displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
  }
  else{
    displayRef.current.style.background = `#121212`
  }
})
  return (
    <div ref={displayRef} className='w-[100%] m-2 pl-5 pr-4  pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-2'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
        {/* ':id' means the value of id is dynamic and can be change */}
      </Routes>
      
    </div>
  )
}

export default Display
