import React from 'react'
import AlbumRequest from '../components/AlbumRequest'
import PosterSearch from '../components/PosterSearch'
import ProductCard from '../components/ProductCard'
import AlbumCatalog from '../AlbumCatalog'

const Posters = () => {
  return (
    <div>
      <h1 className='md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center mx-4'>all the posters we have, and you want</h1>
      <p className='md:text-xl text-center mx-14 mt-4'>all the posters we have, from artists all the way from the weeknd to the backseat lovers.</p>
    
      <PosterSearch />

      <div className='mx-10 mt-10 flex flex-col'>
        <div className='flex flex-col gap-12 md:grid md:grid-cols-3'>
          { AlbumCatalog.map(poster => <ProductCard albumCode={poster.id} />) }
        </div>
      </div>

      <AlbumRequest />
    </div>
  )
}

export default Posters