import React from 'react'
function SongsItems({id, name, image, file, desc, duration}) {
  return (
    <div className='min-w-[180px] cursor-pointer'>
      <div className='p-2 px-3 hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
      </div>
    </div>
  )
}

export default SongsItems
