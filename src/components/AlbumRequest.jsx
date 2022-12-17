import React, { useState } from 'react'
import search from '../images/Search.svg'
import axios from 'axios'

const AlbumRequest = () => {
  const [albumRequest, setAlbumRequest] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('https://api.jadedprints.com/album-requests', { albumRequest })

    setRequestSent(true);
    setAlbumRequest('');
  };

  if (requestSent) {
    return <div>
      <h1 className='text-4xl font-bold text-center mt-20'>can't find the poster you want?</h1>
      <p className='mx-10 text-center mt-2'>don't worry! we take requests and make 
        new designs everyday. enter the album and 
        the artist who made it below.
      </p>

      <h1 className='text-2xl font-light text-center mt-20'>we recieved your request. thanks!</h1>
    </div>
  }

  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-20'>can't find the poster you want?</h1>
      <p className='mx-10 text-center mt-2'>don't worry! we take requests and make 
        new designs everyday. enter the album and 
        the artist who made it below.
      </p>

      <div className='flex flex-col md:gap-4 md:flex-row mt-10 md:mx-auto md:w-7/12 md:max-w-xl'>
        <div className='flex mx-auto w-5/6 md:w-4/6 border-2 rounded-lg pl-3 h-16'>
          <img src={search} alt="" className='w-8'/>
          <input value={albumRequest} onChange={(e) =>setAlbumRequest(e.target.value)} className='w-full ml-3 outline-none' placeholder='enter album and artist' type="text" />
        </div>

        <button onClick={handleSubmit} className='h-16 md:w-2/6 font-bold bg-black text-white text-xl lg:text-xl md:text-base p-4 rounded-lg w-5/6 mx-auto mt-3 md:mt-0'>send request</button>
      </div>
    </div>
  )
}

export default AlbumRequest