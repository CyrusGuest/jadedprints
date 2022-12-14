import React from 'react'
import ContactForm from '../components/ContactForm'

const Company = () => {
  return (
    <div>
      <h1 className='md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center mx-4'>about us - what is jaded prints?</h1>
      <p className='md:text-xl text-center mx-14 mt-4'>jaded prints is an online store that sells customized album cover inspired posters (ACIPs). if a customer cannot find a poster for a specific album, they can simply make a request on our website and we will add it to a list of albums that a graphic design team is constantly working on. posters with the highest perceived popularity have the highest priority when it comes to creation. we offer high-end, american made posters to fill a niche in the home decor market, serving young people who want to fill the walls of their home; and express themselves while doing it, making their home, theirs.</p>

      <h1 className='md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center mx-4'>policy - commonly asked questions</h1>
      
      <div>
        <div>
          <p className='md:text-xl text-center mx-14 mt-8'><span className='font-bold'>Q: </span>are refunds offered for customers?</p>
          <p className='md:text-xl text-center mx-14'><span className='font-bold'>A: </span>as of now, we do not offer any refunds under any circumstances due to the personalized nature of our products. we sincerely apologize for any inconveniences this causes.</p>
        </div>

        <div>
          <p className='md:text-xl text-center mx-14 mt-8'><span className='font-bold'>Q: </span>where are your posters made?</p>
          <p className='md:text-xl text-center mx-14'><span className='font-bold'>A: </span>all of our posters are made in-house, using our own high-quality equipment. we our an america based company, so all products are manufactured in the united states.</p>
        </div>

        <div>
          <p className='md:text-xl text-center mx-14 mt-8'><span className='font-bold'>Q: </span>how long does shipping generally take?</p>
          <p className='md:text-xl text-center mx-14'><span className='font-bold'>A: </span>we ship all our products with USPS First Class. all our products have tracked shipping, and most orders are shipped within 5-7 days but can take up to 14 days.</p>
        </div>
      </div>

      <ContactForm />
      
    </div>
  )
}

export default Company