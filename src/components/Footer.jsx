import React from 'react'
import { Link } from 'react-router-dom'
import EmailIcon from '../images/EmailIcon.svg'
import Pinterest from '../images/Pinterest.svg'
import Instagram from '../images/Instagram.svg'
import Twitter from '../images/Twitter.svg'
import Tiktok from '../images/Tiktok.svg'

const Footer = () => {
  return (
    <div className='flex md:h-[250px] md:flex-row flex-col gap-10 pl-12 pt-8 text-white absolute bottom w-full bg-black h-[550px]'>
      
      <div className='flex md:relative gap-10'>
        <div className='flex flex-col'>
          <h3 className='font-bold text-2xl'>collections</h3>
          <ul className='text-xl flex flex-col'>
            <Link>the weeknd</Link>
            <Link>newly added</Link>
            <Link>most popular</Link>
            <Link>on sale</Link>
            <Link>all posters</Link>
          </ul>
        </div>

        <div className='flex flex-col'>
          <h3 className='font-bold text-2xl'>company</h3>
          <ul className='text-xl flex flex-col'>
            <Link>about us</Link>
            <Link>policy</Link>
            <Link>request an album</Link>
            <Link>contact us</Link>
          </ul>
        </div>
      </div>

      <div>
        <h3 className='font-bold text-2xl'>get the latest news & offers</h3>
        <div className='flex border-2 md:w-auto w-2/3 rounded-lg pl-4 py-3 mt-2'>
          <img src={EmailIcon} alt="" />
          <input className='bg-transparent ml-4 text-xl outline-none' placeholder='email address' type="email" name="email" id="email" />
        </div>
        <button className='bg-white text-black font-bold text-xl md:w-full w-2/3 p-3 rounded-lg mt-4'>subscribe</button>
      </div>

      <div>
        <h3 className='font-bold text-2xl'>socials</h3>
        <div className='flex gap-6 mt-2 md:gap-2'>
          <img src={Pinterest} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={Tiktok} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer