import React from 'react'
import PosterSearch from '../components/PosterSearch'
import ProductCard from '../components/ProductCard'
import AlbumRequest from '../components/AlbumRequest'
import DesignSS from '../images/DesignSS.png'
import Reviewer from '../images/Reviewer.png'

const Home = () => {
  return (
    <div>
      <h1 className='md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center mx-4'>decorate your way with artists you love and we support</h1>
      <p className='md:text-xl text-center mx-14 mt-4'>we provide custom, high-quality posters personalized so you can have the home you want.</p>

      <PosterSearch />

      <div className=''>
        <img className='z-0 w-3/4 ml-12 mt-32 ' src={DesignSS} alt="" />
        <div className='z-10 w-8/12 bg-white shadow-lg text-sm rounded-lg pt-6 absolute left-20 top-[800px]'>
          <img className='mx-auto w-16' src={Reviewer} alt="" />
          <p className='mt-2 font-light ml-4'>"Jaded Prints have masterfully designed posters by real 
            industry-professionals. The posters they sell are high-quality 
            both in physical quality and design.
          </p>
          <h3 className='ml-4 mt-2 font-bold'>Mina Hadsworth</h3>
          <h3 className='ml-4 pb-2'>Graphic Designer, Plainworks</h3>
        </div>
      </div>

      <div className='mt-64'>
        <h1 className='text-center text-4xl font-bold'>our best sellers</h1>
        <p className='text-center mb-10'>new and popular posters our customers <span>love</span> the most.</p>
      
        <div className="flex flex-col gap-10">
          <ProductCard albumCode={0} />
          <ProductCard albumCode={1} />
          <ProductCard albumCode={2} />
        </div>

      </div>

      <AlbumRequest />

    </div>
  )
}

export default Home