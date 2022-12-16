import React, { useState } from 'react'
import search from '../images/Search.svg'
import { useNavigate } from 'react-router-dom'

const PosterSearch = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  return (
    <div className='flex flex-col md:gap-4 md:flex-row mt-10 md:mx-auto md:w-7/12 md:max-w-xl'>
      <div className='flex mx-auto w-5/6 md:w-4/6 border-2 rounded-lg pl-3 h-16'>
        <img src={search} alt="" className='w-8'/>
        <input value={query} onChange={(e) => setQuery(e.target.value)} className='w-full ml-3 outline-none' placeholder='search our posters' type="text" />
      </div>

      <button onClick={() => navigate(`/search/${query}`)} className='h-16 md:w-2/6 font-bold bg-black text-white text-xl p-4 rounded-lg w-5/6 mx-auto mt-3 md:mt-0'>find yours</button>
    </div>
  )
}

export default PosterSearch