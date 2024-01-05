import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlbumCatalog from "../AlbumCatalog";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = ({ albumCode }) => {
  function getAlbumDetails(albumCode) {
    const album = AlbumCatalog.find((album) => album.id === albumCode);
    return album ? album : null;
  }

  const [albumCover, setAlbumCover] = useState("");

  const album = getAlbumDetails(albumCode);

  useEffect(() => {
    // Directly set the image URL based on the album details
    const imageUrl = `/images/posters/${album.images}/12x18 Poster.webp`;
    setAlbumCover(imageUrl);
  }, [album.images]);

  return (
    <div className="w-6/6 shadow-xl rounded-xl p-8 md:p-4 lg:p-8 mx-auto flex flex-col align-middle">
      <h3 className="text-xl font-bold text-center md:text-base lg:text-xl">
        {album.title}
      </h3>
      <LazyLoadImage
        className="shadow-xl"
        width="330"
        height="460"
        src={albumCover}
        placeholderSrc="/images/Loading.webp"
      />
      <h2 className="text-center text-2xl font-light mt-3 md:text-base lg:text-2xl">
        $23.99 + free shipping
      </h2>

      <Link to={album.link}>
        <button className="w-full bg-black text-white text-2xl md:text-base lg:text-2xl lg:p-3 md:p-2 font-bold p-3 rounded-lg mt-3">
          view poster
        </button>
      </Link>

      <p className="text-center md:text-sm font-light mt-2 lg:text-base">
        tax not included
      </p>
    </div>
  );
};

export default ProductCard;
