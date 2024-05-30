import React from 'react'
// import  {Routes} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
function Display() {
  return (
    <div className='w-[100%] m-2 pl-5 pr-4  pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-2'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
        {/* ':id' means the value of id is dynamic and can be change */}
      </Routes>
      
    </div>
  )
}

export default Display
