import React, { useContext } from "react";
import CartProduct from "../components/CartProduct";
import CartContext from "../context/CartContext";
import Checkout from "../images/Checkout.svg";
import axios from "axios";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const handleCheckout = async () => {
    const endpoint = "https://api.jadedprints.com/create-checkout-session";

    const response = await axios.post(endpoint, cart);

    const redirectURL = response.data;

    window.location = redirectURL;
  };

  return (
    <div>
      <h1 className="text-xl text-center font-bold mt-4">
        {cart.length} item(s) in cart
      </h1>
      {cart.length < 1 ? (
        <h1 className="font-light text-xl text-center h-40 mb-32 mt-8 mx-auto">
          no items in cart
        </h1>
      ) : (
        ""
      )}
      {cart.length >= 1 ? (
        <button
          onClick={() => handleCheckout()}
          className="bg-black font-bold text-xl mx-auto py-4 px-20 gap-3 mt-2 text-white flex rounded-lg"
        >
          <img className="mt-1" src={Checkout} alt="" />
          checkout
        </button>
      ) : (
        ""
      )}
      <div className="md:max-w-3xl mx-8 md:mx-auto flex flex-col gap-8 md:grid md:grid-cols-2 mt-4">
        {cart.length >= 1
          ? cart.map((item) => <CartProduct poster={item} />)
          : ""}
      </div>
    </div>
  );
};

export default Cart;
