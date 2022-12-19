import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AlbumRequest from '../components/AlbumRequest'
import PosterSearch from '../components/PosterSearch'
import ProductCard from '../components/ProductCard'
import AlbumCatalog from '../AlbumCatalog'

const Search = () => {
  const { query } = useParams()
  const [posters, setPosters] = useState([])

  useEffect(() => {
    let newPosters = []

    for (let i = 0; i < AlbumCatalog.length; i++) {
      const currentAlbum = AlbumCatalog[i];
      
      if (currentAlbum.title.includes(query)) {
        newPosters.push(currentAlbum);
      };
    }

    setPosters(newPosters)
  }, [query]);

  return (
    <div className='mx-6'>
      <h1 className='text-center text-xl mt-6'>showing results for <span className='font-bold'>{query}</span></h1>

      <PosterSearch />

      <div className='flex mt-10 flex-col md:grid md:grid-cols-2 gap-16 mx-auto md:max-w-5xl'>
        { posters.map(poster => <ProductCard albumCode={poster.id} />) }
      </div>

      <AlbumRequest /> 
    </div>
  )
}

export default Search