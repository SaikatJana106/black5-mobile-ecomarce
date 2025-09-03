import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-black relative'>
      <div className='max-[1282px]:hidden flex justify-between w-[90%] mx-auto py-5'>
        <div className='flex gap-12'>
          <Link to={"/login"} className='text-white underline text-[1.2rem]'>Your Account</Link>
          <Link className='text-white underline text-[1.2rem]'>Your Cart</Link>
        </div>
        <div className='flex gap-8'>
          <Link to={"/"} className='text-white underline text-[1.2rem]'>Home</Link>
          <Link to={"/phonecase"} className='text-white underline text-[1.2rem]'>Phone Cases</Link>
          {/* <Link to={"/product"} className='text-white underline text-[1.2rem]'>Product Page</Link> */}
          <Link to={"/wallart"} className='text-white underline text-[1.2rem]'>Wall Art</Link>
          <Link to={"/wallartproduct"} className='text-white underline text-[1.2rem]'>Wall Art Product</Link>
          <Link to={"/customise"} className='text-white underline text-[1.2rem]'>Customise</Link>
          <Link to="/contact-us" className="text-white underline text-[1.2rem]">Contact Us</Link>
        </div>
      </div>
      <div className="hidden text-white text-2xl cursor-pointer max-[1282px]:flex items-center justify-end py-3 px-3" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
      {isOpen && (
        <div className="hidden max-[1282px]:flex flex-col items-center gap-4 pb-5 absolute top-10 left-0 right-0 bg-black">
          <Link className="text-white underline text-[1.2rem]">Your Account</Link>
          <Link className="text-white underline text-[1.2rem]">Your Cart</Link>
          <Link to="/" className="text-white underline text-[1.2rem]">Home</Link>
          <Link to="/phonecase" className="text-white underline text-[1.2rem]">Phone Cases</Link>
          <Link to="/product" className="text-white underline text-[1.2rem]">Product Page</Link>
          <Link to="/wallart" className="text-white underline text-[1.2rem]">Wall Art</Link>
          <Link to="/wallartproduct" className="text-white underline text-[1.2rem]">Wall Art Product</Link>
          <Link to="/customise" className="text-white underline text-[1.2rem]">Customise</Link>
          <Link to="/contact-us" className="text-white underline text-[1.2rem]">Contact Us</Link>
        </div>
      )}
    </div>
  )
}

export default Header
