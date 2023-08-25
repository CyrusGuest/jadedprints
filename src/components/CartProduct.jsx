import React, { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import AlbumCatalog from "../AlbumCatalog";

const CartProduct = ({ poster }) => {
  const [size, setSize] = useState(poster.size);
  const [quantity, setQuantity] = useState(poster.quantity);
  const [editDetails, setEditDetails] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [albumCover, setAlbumCover] = useState("");
  function getAlbumDetails(albumCode) {
    const album = AlbumCatalog.find((album) => album.id === albumCode);
    return album ? album : null;
  }

  const album = getAlbumDetails(parseInt(poster.id));

  useEffect(() => {
    const loadImage = async () => {
      const image = await import(
        `../images/posters/${album.images}/${size} Poster.webp`
      );

      setAlbumCover(image.default);
    };

    loadImage();
  }, [album.images, size]);

  const sizePrices = {
    "20x30": 32.99,
    "16x20": 29.99,
    "12x18": 25.99,
    "11x14": 23.99,
  };

  const removeFromCart = () => {
    let newCart = cart;

    newCart = newCart.filter((item) => item !== poster);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const saveDetails = () => {
    if (typeof quantity !== "number")
      return alert("quantity has to be a number");
    if (quantity < 1) return alert("quantity cannot be less than 1");

    let newCart = cart;

    newCart = newCart.filter((item) => item !== poster);

    setCart([
      ...newCart,
      {
        id: poster.id,
        title: poster.title,
        size,
        quantity,
        price: sizePrices[size],
        uid: poster.id,
      },
    ]);
    localStorage.setItem("cart", JSON.stringify(cart));

    setEditDetails(false);
  };

  if (editDetails)
    return (
      <div className="shadow-xl rounded-xl p-8 md:p-4 lg:p-8 mx-auto max-w-sm mt-6 relative">
        <div
          onClick={removeFromCart}
          className="cursor-pointer h-12 text-2xl absolute -top-4 -left-4 w-12 md:hidden flex items-center justify-center bg-black text-white font-bold rounded-full"
        >
          <h1>X</h1>
        </div>

        <h3 className="text-xl mt-3 font-light">JADED PRINTS'</h3>
        <img className="shadow-lg w-1/2" src={albumCover} alt="" />
        <h1 className="text-3xl font-bold mt-3">{poster.title}</h1>
        <h3 className="text-lg font-light mt-1">
          ${sizePrices[size]} USD tax not included
        </h3>

        <div className="mt-2">
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
          onClick={saveDetails}
          className="w-full bg-black text-white text-2xl lg:text-2xl lg:p-3  font-bold p-3 rounded-lg mt-3"
        >
          save details
        </button>
      </div>
    );

  return (
    <div className="w-6/6 mx-auto mt-2 shadow-xl rounded-xl p-8 lg:p-8 max-w-sm relative">
      <div
        onClick={removeFromCart}
        className="md:hidden cursor-pointer h-12 text-2xl absolute -left-6 -top-2 w-12 flex items-center justify-center bg-black text-white font-bold rounded-full"
      >
        <h1>X</h1>
      </div>

      <h3 className="text-xl font-bold text-center md:text-base lg:text-xl">
        {album.title}
      </h3>
      <img className="shadow-xl" src={albumCover} alt="" />
      <h2 className="text-center text-2xl font-light mt-3 lg:text-2xl">
        ${sizePrices[size]} + free shipping
      </h2>

      <button
        onClick={() => setEditDetails(true)}
        className="w-full bg-black text-white text-2xl lg:text-2xl lg:p-3 font-bold p-3 rounded-lg mt-3"
      >
        edit details
      </button>

      <p className="md:hidden text-center md:text-sm font-light mt-2 lg:text-base">
        tax not included
      </p>
      <p
        onClick={removeFromCart}
        className="hidden md:block cursor-pointer underline text-center md:text-sm font-light mt-2 lg:text-base"
      >
        remove from cart
      </p>
    </div>
  );
};

export default CartProduct;
