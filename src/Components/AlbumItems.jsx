import React from 'react'
import { useNavigate } from 'react-router-dom'

function AlbumItems({image, name, desc, id}) {

  const nevigate = useNavigate()  //Make notes

  return (
    <div onClick={()=>nevigate(`/album/${id}`)} className='min-w-[180px] w-[190%] rounded cursor-pointer'>
        <div className=' p-2 px-3 hover:bg-[#ffffff26]'>
      <img className=' rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
      </div>
    </div>
  )
}

export default AlbumItems
