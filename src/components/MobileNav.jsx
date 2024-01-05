import React from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ setMobileNav }) => {
  return (
    <div className="fixed z-20 w-3/4 h-full bg-black right-0">
      <div className="flex mt-5">
        <img
          src="/images/Arrow.svg"
          onClick={() => setMobileNav(false)}
          alt=""
          className="cursor-pointer w-8 ml-6"
        />
        <img
          src="/images/WhiteHamburgerMenu.svg"
          onClick={() => setMobileNav(false)}
          alt=""
          className="cursor-pointer ml-auto mr-4"
        />
      </div>

      <div className="flex flex-col ml-6 mt-10 text-white  gap-10">
        <ul className="text-2xl">
          <h1 className="font-bold text-5xl">shop</h1>
          <Link onClick={() => setMobileNav(false)} to="/">
            <h4 className="mt-1">home</h4>
          </Link>
          <Link onClick={() => setMobileNav(false)} to="posters">
            <h4 className="mt-1">posters</h4>
          </Link>
          <Link onClick={() => setMobileNav(false)} to="collections">
            <h4 className="mt-1">collections</h4>
          </Link>
        </ul>

        <ul className="text-2xl">
          <h1 className="font-bold text-5xl">company</h1>
          <Link onClick={() => setMobileNav(false)} to="company">
            <h4 className="mt-1">about us</h4>
          </Link>
          <Link onClick={() => setMobileNav(false)} to="company">
            <h4 className="mt-1">contact us</h4>
          </Link>
          <Link onClick={() => setMobileNav(false)} to="company">
            <h4 className="mt-1">policy</h4>
          </Link>
        </ul>

        <Link
          onClick={() => setMobileNav(false)}
          className="mr-6 fixed bottom-10 w-8/12 text-3xl text-center cursor-pointer text-black bg-white dark:hover:bg-brand-secondary hover:bg-black dark:hover:text-white hover:text-brand-primary bg-brand-primary dark:text-brand-secondary drop-shadow-lg py-3 px-6 font-semibold rounded-md transition duration-300"
          to="cart"
        >
          checkout
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
