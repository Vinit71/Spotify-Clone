import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumData, songsData} from '../assets/assets';
import { assets } from '../assets/assets';
import { PlayerContext } from '../Context/PlayerContext';

function DisplayAlbum() {
    const {id} = useParams();
    // console.log(id);
    const albumsData = albumData[id]
    const {playWithId} = useContext(PlayerContext)
    // console.log(albumsData);
 
  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-8 flex-col md:flex-row md:items-end '>
        <img className='w-48 rounded' src={albumsData.image} alt="" />

        <div className='flex flex-col'>
          <p>Playlist</p>
          <h1 className='text-5xl font-bold mb-4 md:text-6xl'>{albumsData.name}</h1>
          <h1>{albumsData.desc}</h1>
          <p className='flex mt-1 gap-4'>
            <img className='inline-block w-5' src={assets.homeIcon} alt="" />
          <b>Spotify</b>
          1,323,154
          <b className=''>50 Songs</b>
          about 2hr
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.micIcon} alt="" />
      </div>
      <hr />
      {
        songsData.map((items, index)=>(
          <div onClick={()=>playWithId(items.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer'>
              <p className='text-white'>
                <b className='mr-4 text-[#a7a7a7'>{index+1}</b>
                <img className='inline w-10 mr-5' src={items.image} alt="" />
                {items.name}
              </p>
              <p className='text-[15px]'>{albumsData.name}</p>
              <p className='text-[15px] '>10 days ago</p>
              <p className='text-[15px] text-center'>{items.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
