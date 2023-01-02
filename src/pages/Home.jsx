import React from "react";
import PosterSearch from "../components/PosterSearch";
import ProductCard from "../components/ProductCard";
import AlbumRequest from "../components/AlbumRequest";
import DesignSS from "../images/Design.webp";
import Reviewer from "../images/Reviewer.webp";

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1 className="md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center mx-4">
        decorate your way with artists you love and we support
      </h1>
      <p className="md:text-xl text-center mx-14 mt-4">
        we provide custom, high-quality posters personalized so you can have the
        home you want.
      </p>

      <PosterSearch />

      <div className="mx-auto w-3/4 md:relative">
        <img
          className="z-0 w-full md:w-3/4 max-w-4xl md:float-right mt-20"
          src={DesignSS}
          alt=""
        />
        <div className="z-10 w-7/12 md:max-w-md md:flex bg-white shadow-lg rounded-lg pt-4 md:pt-0 md:left-10 md:top-32 absolute left-20 top-[700px]">
          <img
            className="mx-auto w-14 md:w-full rounded-full md:rounded-none"
            src={Reviewer}
            alt=""
          />
          <div className="flex flex-col md:mt-2">
            <p className="mt-2 md:text-base text-sm font-light ml-4">
              "Jaded Prints have masterfully designed posters by real
              industry-professionals. The posters they sell are high-quality
              both in physical quality and design."
            </p>
            <h3 className="ml-4 mt-2 font-bold">Mina Hadsworth</h3>
            <h3 className="ml-4 pb-2">Graphic Designer, Plainworks</h3>
          </div>
        </div>
      </div>

      <div className="mt-96 md:mt-40">
        <h1 className="text-center text-4xl md:text-5xl font-bold mx-10">
          our best sellers
        </h1>
        <p className="text-center mb-10 mx-10 md:text-xl">
          new and popular posters our customers <span>love</span> the most.
        </p>

        <div className="flex flex-col gap-10 md:flex-row mx-8">
          <ProductCard albumCode={20} />
          <ProductCard albumCode={21} />
          <ProductCard albumCode={15} />
        </div>
      </div>

      <AlbumRequest />
    </div>
  );
};

export default Home;
