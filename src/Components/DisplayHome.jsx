import React from 'react'
import Navbar from './Navbar'
import { albumData, songsData } from '../assets/assets'
import AlbumItems from './AlbumItems'
import SongsItems from './SongsItems'
function DisplayHome() {
  return (
    <>
      <Navbar />
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className='flex overflow-auto'>
        {albumData.map((items, index)=>(<AlbumItems key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}/>))}
      </div>
    </div>

    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Recent Songs</h1>
      <div className='flex overflow-auto'>
        {songsData.map((items, index)=>(<SongsItems key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}/>))}
      </div>
    </div>
    </>
  )
}

export default DisplayHome
