import React from 'react'
import EmailIcon from '../images/EmailIcon.svg'
import Subject from '../images/Subject.svg'
import Paragraph from '../images/Paragraph.svg'

const ContactForm = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-32 font-bold text-center mx-4'>contact us with any concerns</h1>
      <p className='md:text-xl text-center mx-14 mt-4'>we're a small team so it might take us some time to get back to you, please be patient!</p>

      <div className='flex border-2 w-2/3 max-w-lg rounded-lg pl-4 py-3 mt-10 mx-auto'>
        <img src={EmailIcon} alt="" />
        <input className='bg-transparent ml-4 text-xl outline-none' placeholder='email address' type="email" name="email" id="email" />
      </div>

      <div className='flex border-2 w-2/3 max-w-lg rounded-lg pl-4 py-3 mt-4 mx-auto'>
        <img src={Subject} alt="" />
        <input className='bg-transparent ml-4 text-xl outline-none' placeholder='subject' type="text" name="subject" id="subject" />
      </div>

      <div className='flex relative border-2 w-2/3 max-w-lg rounded-lg pl-2 py-3 mt-4 mx-auto'>
        <img className='absolute' src={Paragraph} alt="" />
        <textarea className='bg-transparent ml-12 text-xl outline-none' placeholder='message' type="textarea" name="message" id="message" />
      </div>

      <button className='bg-black rounded-lg mt-4 text-white text-xl py-4 font-bold w-2/3 max-w-sm mx-auto'>send message</button>
    </div>
  )
}

export default ContactForm