import React from 'react'
import AlbumRequest from '../components/AlbumRequest'
import ProductCard from '../components/ProductCard'

const Collections = () => {
  return (
    <div>
      <div className='flex flex-col w-10/12 mx-auto'>
        <h1 className='md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center'>the weeknd collection</h1>
        <p className='md:text-xl text-center mx- mt-4'>we love the weeknd just as much as you do - so we made him a collection.</p>
      
        <div className='flex flex-col gap-16 md:gap-8 md:grid md:grid-cols-3 mt-10'>
          <ProductCard albumCode={0} />
          <ProductCard albumCode={5} />
          <ProductCard albumCode={12} />
        </div>

        <h1 className='md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-32 font-bold text-center mx-4'>new releases collection</h1>
        <p className='md:text-xl text-center mx-14 mt-4'>our newly added posters from the most recent releases.</p>
      
        <div className='flex flex-col gap-16 md:grid md:grid-cols-3 mt-10'>
          <ProductCard albumCode={18} />
          <ProductCard albumCode={9} />
          <ProductCard albumCode={11} />
        </div>
      </div>
      
      <AlbumRequest />
    </div>
  )
}

export default Collections