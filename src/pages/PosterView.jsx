import React, { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import { useParams, useNavigate } from "react-router-dom";
import AlbumRequest from "../components/AlbumRequest";
import Materials from "../images/Materials.svg";
import Shipping from "../images/Shipping.svg";
import Dimensions from "../images/Dimensions.svg";
import Care from "../images/Care.svg";
import DropdownArrow from "../images/DropdownArrow.svg";
import AlbumCatalog from "../AlbumCatalog";
import gtag from "ga-gtag";

const PosterView = () => {
  const [size, setSize] = useState("11x14");
  const [quantity, setQuantity] = useState(1);
  const [materials, setMaterials] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [dimensions, setDimensions] = useState(false);
  const [care, setCare] = useState(false);
  const [albumCover, setAlbumCover] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const album = AlbumCatalog[id];

  useEffect(() => {
    gtag("event", "view_poster", {
      poster: album.title,
    });

    const loadImage = async () => {
      const image = await import(
        `../images/posters/${album.images}/${size} Poster.webp`
      );

      console.log(image);

      setAlbumCover(image.default);
    };

    loadImage();
  }, [album.images, size]);

  const { cart, setCart } = useContext(CartContext);

  const sizePrices = {
    "20x30": 32.99,
    "16x20": 29.99,
    "12x18": 25.99,
    "11x14": 23.99,
  };

  const addPosterToCart = (e) => {
    e.preventDefault();

    if (typeof quantity !== "number")
      return alert("quantity has to be a number");
    if (quantity < 1) return alert("quantity cannot be less than 1");

    const albumToAdd = {
      id,
      title: album.title,
      size,
      price: sizePrices[size],
      quantity,
      uid: Date.now(),
    };

    const newCart = [...cart, albumToAdd];

    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart);

    navigate("/cart");
  };

  return (
    <div>
      <div className="mx-10 md:flex md:mx-20 lg:mx-44 md:gap-10 md:mt-10">
        <div className="md:w-11/12">
          <img className="shadow-lg" src={albumCover} alt="" />
        </div>

        <div className="md:max-w-md cursor-pointer">
          <h3 className="text-xl mt-3 font-light">JADED PRINTS'</h3>
          <h1 className="text-3xl font-bold">{album.title}</h1>
          <h3 className="text-lg font-light mt-1">
            ${sizePrices[size]} USD + free shipping
          </h3>

          <div className="mt-4">
            <h3 className="text-2xl font-light">size</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                className={`${
                  size === "20x30" ? "bg-black text-white" : ""
                } border py-2 rounded-lg border-black`}
                onClick={() => setSize("20x30")}
              >
                20" x 30"
              </button>
              <button
                className={`${
                  size === "16x20" ? "bg-black text-white" : ""
                } border py-2 rounded-lg border-black`}
                onClick={() => setSize("16x20")}
              >
                16" x 20"
              </button>
              <button
                className={`${
                  size === "12x18" ? "bg-black text-white" : ""
                } border py-2 rounded-lg border-black`}
                onClick={() => setSize("12x18")}
              >
                12" x 18"
              </button>
              <button
                className={`${
                  size === "11x14" ? "bg-black text-white" : ""
                } border py-2 rounded-lg border-black`}
                onClick={() => setSize("11x14")}
              >
                11" x 14"
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-light">quantity</h3>
            <input
              required
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border border-black outline-none p-1 w-1/2 rounded-md"
              placeholder="1"
              type="number"
              name="quantity"
              id="quantity"
            />
          </div>

          <button
            onClick={(e) => addPosterToCart(e)}
            className="w-full bg-black p-4 text-white font-bold mt-6 rounded-lg text-2xl"
          >
            add to cart
          </button>

          <p className="text-lg font-light mt-8">
            poster with design including the {album.title} album cover,
            tracklist, spotify link, and other information
          </p>

          <div className="mt-8">
            <hr className="border-neutral-400" />
            <div
              onClick={() => setMaterials(!materials)}
              className="my-3 flex flex-col"
            >
              <div className="flex">
                <img className="w-8 h-6" src={Materials} alt="" />
                <h3 className="text-xl font-light ml-4">materials</h3>
                <img className="ml-auto mr-5" src={DropdownArrow} alt="" />
              </div>

              {materials ? (
                <p className="mt-2 font-light">
                  Our posters are made with high-quality photo canvas paper.
                </p>
              ) : (
                ""
              )}
            </div>

            <hr className="border-neutral-400" />
            <div
              onClick={() => setShipping(!shipping)}
              className="my-3 flex flex-col"
            >
              <div className="flex">
                <img className="w-8" src={Shipping} alt="" />
                <h3 className="text-xl font-light ml-4">shipping & returns</h3>
                <img className="ml-auto mr-5" src={DropdownArrow} alt="" />
              </div>

              {shipping ? (
                <p className="mt-2 font-light">
                  We offer free shipping in the domestic United States. All
                  sales are final.
                </p>
              ) : (
                ""
              )}
            </div>

            <hr className="border-neutral-400" />
            <div
              onClick={() => setDimensions(!dimensions)}
              className="my-3 flex flex-col"
            >
              <div className="flex">
                <img className="w-8" src={Dimensions} alt="" />
                <h3 className="text-xl font-light ml-4">dimensions</h3>
                <img className="ml-auto mr-5" src={DropdownArrow} alt="" />
              </div>

              {dimensions ? (
                <p className="mt-2 font-light">
                  Our posters come in four different sizes: 11"x14", 12"x18",
                  16"x20", and 20"x30". All units are inches.
                </p>
              ) : (
                ""
              )}
            </div>

            <hr className="border-neutral-400" />
            <div onClick={() => setCare(!care)} className="my-3 flex flex-col">
              <div className="flex">
                <img className="w-8" src={Care} alt="" />
                <h3 className="text-xl font-light ml-4">care instructions</h3>
                <img className="ml-auto mr-5" src={DropdownArrow} alt="" />
              </div>

              {care ? (
                <p className="mt-2 font-light">
                  Keep in a 62-76 fahrenheit, dehumidifed area for best quality.
                </p>
              ) : (
                ""
              )}
            </div>

            <hr className="border-neutral-400" />
          </div>
        </div>
      </div>

      <div className="md:max-w-lg mx-auto max-w-sm">
        <h1 className="md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center mx-4">
          free shipping
        </h1>
        <p className="md:text-xl text-center mt-4">
          unlike our competition, we offer free shipping on all mainland united
          states orders; this means the sticker price you see is much closer to
          what you actually pay.
        </p>

        <h1 className="md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center mx-4">
          custom designs
        </h1>
        <p className="md:text-xl text-center mt-4">
          we offer a plethora of artists' music featured in our posters designs.
          if you aren't able to find the poster you want, make a request and
          we'll make one just for you.
        </p>
      </div>

      <AlbumRequest />
    </div>
  );
};

export default PosterView;
