import React, { useContext, useEffect } from 'react'
import ContactForm from '../components/ContactForm'
import CartContext from '../context/CartContext'

const OrderSuccess = () => {
  const { cart, setCart } = useContext(CartContext)

  useEffect(() => {
    setCart([]);

    localStorage.setItem('cart', JSON.stringify(cart));
  }, [])

  return (
    <div>
      <div>
        <h1 className='md:max-w-4xl md:mx-auto md:text-5xl text-4xl mt-10 font-bold text-center mx-4'>thank you for your order!</h1>
        <p className='md:text-xl text-center mx-14 mt-4'>we've recieved your order and will send you an email with your order receipt. shipping generally takes 5-7 business days.</p>

        <ContactForm />
        
      </div>
    </div>
  )
}

export default OrderSuccess