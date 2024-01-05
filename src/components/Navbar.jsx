import React, { useState } from "react";
import MobileNav from "./MobileNav";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="h-12 w-full bg-black text-white text-center font-bold text-lg md:text-xl">
        <h1 className="mt-3">HAPPY 2024. FREE SHIPPING ON ALL ORDERS.</h1>
      </div>
      <div className="flex">
        {mobileNav ? <MobileNav setMobileNav={setMobileNav} /> : ""}

        <div className="m-3 md:w-1/6">
          <Link to="/">
            <img
              className="w-1/3 md:w-auto md:max-h-28"
              src="/images/Logo.webp"
              alt="Jaded Prints Logo"
            />
          </Link>
        </div>

        <ul className="justify-center w-5/6 font-bold hidden md:flex text-xl lg:text-2xl align-middle gap-6 mt-7">
          <Link to="/">HOME</Link>
          <Link to="posters">POSTERS</Link>
          <Link to="company">ABOUT US</Link>
          <Link to="collections">COLLECTIONS</Link>
          <Link to="company">CONTACT US</Link>
        </ul>

        <div className="md:w-1/12 md:max-h-10 lg:max-h-10 flex gap-5 justify-end md:mt-5 mr-5 md:mr-7">
          <img
            onClick={() => navigate("cart")}
            className="w-10 md:w-8 lg:w-10 cursor-pointer"
            src="/images/Bag.svg"
            alt="Checkout Bag"
          />
          <img
            onClick={() => setMobileNav(!mobileNav)}
            className="w-10 cursor-pointer md:hidden"
            src="/images/HamburgerMenu.svg"
            alt="Hamburger Menu"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
