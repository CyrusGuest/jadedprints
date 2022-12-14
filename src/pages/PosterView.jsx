import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AlbumRequest from '../components/AlbumRequest'
import dawnfm from '../images/posters/dawnfm.png'
import graduation from '../images/posters/graduation.png'
import midnights from '../images/posters/midnights.png'

const PosterView = () => {
  const [size, setSize] = useState('20x30')
  const { id } = useParams()

  const albumCatalog = { 0: { title: 'the weeknd - dawn fm', image: dawnfm, link: 'posters/0' },
  1: { title: 'kanye west - graduation', image: graduation, link: 'posters/1' },
  2: { title: 'taylor swift - midnights', image: midnights, link: 'posters/2' }
  }

  const sizePrices = { '20x30': 32.99, '16x20': 29.99, '12x18': 25.99, '11x14': 23.99 }

  const album = albumCatalog[id]

  return (
    <div>
      <div className='mx-10'>
        <img src={album.image} alt="" />
        <h3>JADED PRINTS'</h3>
        <h1>{album.title}</h1>
        <h3>${sizePrices[size]} USD <span>tax not included</span></h3>

        <div>
          <h3>size</h3>
          <div>
            <button onClick={() => setSize('20x30')}>20" x 30"</button>
            <button onClick={() => setSize('16x20')}>16" x 20"</button>
            <button onClick={() => setSize('12x18')}>12" x 18"</button>
            <button onClick={() => setSize('11x14')}>11" x 14"</button>
          </div>
        </div>

        <div>
          <h3>quantity</h3>
          <div>
            <button><img src="" alt="" /></button>
            <h3>1</h3>
            <button><img src="" alt="" /></button>
          </div>
        </div>

        <button>add to cart</button>

        <p>poster with design including the beauty behind the madness album cover, tracklist, spotify link, and other information</p>
      
        <div>
          <hr />
          <div>
            <img src="" alt="" />
            <h3>materials</h3>
            <img src="" alt="" />
          </div>

          <hr />
          <div>
            <img src="" alt="" />
            <h3>shipping & returns</h3>
            <img src="" alt="" />
          </div>

          <hr />
          <div>
            <img src="" alt="" />
            <h3>dimensions</h3>
            <img src="" alt="" />
          </div>

          <hr />
          <div>
            <img src="" alt="" />
            <h3>care instructions</h3>
            <img src="" alt="" />
          </div>

          <hr />

          <div>
            <img src="" alt="" />
            <h3>share</h3>
          </div>
        </div>

        <h1 className='md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center mx-4'>free shipping</h1>
        <p className='md:text-xl text-center mx-14 mt-4'>unlike our competition, we offer free shipping on all mainland united states orders; this means the sticker price you see is much closer to what you actually pay.</p>

        <h1 className='md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center mx-4'>custom designs</h1>
        <p className='md:text-xl text-center mx-14 mt-4'>we offer a plethora of artists' music featured in our posters designs. if you aren't able to find the poster you want, make a request and we'll make one just for you.</p>

        <AlbumRequest />
      </div>
    </div>
  )
}

export default PosterView