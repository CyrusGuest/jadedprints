import React from 'react'
import search from '../images/Search.svg'

const PosterSearch = () => {
  return (
    <div className='flex flex-col md:flex-row mt-10'>
      <div className='flex mx-auto w-5/6 border-2 rounded-lg p-4'>
        <img src={search} alt="" />
        <input className='w-full ml-3 outline-none' placeholder='search our posters' type="text" />
      </div>

      <button className='font-bold bg-black text-white text-xl p-4 rounded-lg w-5/6 mx-auto mt-3'>find yours</button>
    </div>
  )
}

export default PosterSearch