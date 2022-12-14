import React from 'react'
import search from '../images/Search.svg'

const AlbumRequest = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-20'>can't find the poster you want?</h1>
      <p className='mx-10 text-center mt-2'>don't worry! we take requests and make 
        new designs everyday. enter the album and 
        the artist who made it below.
      </p>

      <div className='flex flex-col mt-6 mb-20'>
        <div className='flex mx-auto w-5/6 border-2 rounded-lg p-4'>
          <img src={search} alt="" />
          <input className='w-full ml-3 outline-none' placeholder='enter an album' type="text" />
        </div>

        <button className='font-bold bg-black text-white text-xl p-4 rounded-lg w-5/6 mx-auto mt-3'>send request</button>
      </div>
    </div>
  )
}

export default AlbumRequest