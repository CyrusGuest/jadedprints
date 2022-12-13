import React from 'react'
import Logo from '../images/Logo.png'
import Bag from '../images/Bag.svg'
import HamburgerMenu from '../images/HamburgerMenu.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex'>
      <div className='m-3 md:w-1/6'>
        <img className='w-1/3 md:w-auto md:max-h-28' src={Logo} alt="Jaded Prints Logo" />
      </div>

      <ul className='justify-center w-5/6 hidden md:flex font-bold text-xl lg:text-2xl align-middle gap-6 mt-7'>
        <Link to="/">home</Link>  
        <Link to="posters">posters</Link>
        <Link to="company">about us</Link>
        <Link to="collections">collections</Link>
        <Link to="company">contact us</Link>
      </ul>

      <div className='md:w-1/12 md:max-h-10 lg:max-h-10 flex gap-5 justify-end md:mt-5 mr-5 md:mr-7'>
        <img className='w-10 md:w-8 lg:w-10 cursor-pointer' src={Bag} alt="Checkout Bag" />
        <img className='w-10 cursor-pointer md:hidden' src={HamburgerMenu} alt="Hamburger Menu" />
      </div>
    </div>
  )
}

export default Navbar