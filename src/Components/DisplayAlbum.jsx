import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumData} from '../assets/assets';

function DisplayAlbum() {
    const {id} = useParams();
    // console.log(id);
    const albumsData = albumData[id]
    console.log(albumsData);
 
  return (
    <>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-8 flex-col md:flex-row md:items-end'>
        <img src={albumsData.image} alt="" />
      </div>
    </>
  )
}

export default DisplayAlbum
