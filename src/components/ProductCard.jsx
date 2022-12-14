import React from 'react'
import { Link } from 'react-router-dom'
import dawnfm from '../images/posters/dawnfm.png'
import graduation from '../images/posters/graduation.png'
import midnights from '../images/posters/midnights.png'

const ProductCard = ({ albumCode }) => {
  const albumCatalog = { 0: { title: 'the weeknd - dawn fm', image: dawnfm, link: 'posters/0' },
  1: { title: 'kanye west - graduation', image: graduation, link: 'posters/1' },
  2: { title: 'taylor swift - midnights', image: midnights, link: 'posters/2' }
  }

  const album = albumCatalog[albumCode]

  return (
    <div className='w-6/6 shadow-xl rounded-xl p-8 md:p-4 lg:p-8 mx-auto'>
      <h3 className='text-xl font-bold text-center md:text-base lg:text-xl'>{album.title}</h3>
      <img className='shadow-xl' src={album.image} alt="" />
      <h2 className='text-center text-2xl font-light mt-3 md:text-base lg:text-2xl'>$23.99 + free shipping</h2>

      <button className='w-full bg-black text-white text-2xl md:text-base lg:text-2xl lg:p-3 md:p-2 font-bold p-3 rounded-lg mt-3'><Link to={album.link}>view poster</Link></button>

      <p className='text-center md:text-sm font-light mt-2 lg:text-base'>tax not included</p>
    </div>
  )
}

export default ProductCard