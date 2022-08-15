import React from 'react'
import Logo from '../images/EMEDEN-LOGO.png'
import { MdShoppingCart } from 'react-icons/md'

const Header = () => {
  return (
    <header className="fixed z-50 w-screen bg-slate-400 p-6 px-16">
      <div className="hidden md:flex w-full h-full items-center justify-between"></div>

      <div className="flex items-center gap-2">
        <img src={Logo} className="w-12 object-cover" alt="logo" />
        <p className="text-headingColor text-xl font-bold"> EMEDEN Kenya Farmers</p>

      
          <div className="flex items-center gap-8 ml-auto">
        <ul className="flex items-center gap-8" >
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Soko Mkononi</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Mwalimu Kilimo</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Services</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Sign In</li>
      </ul>
      

      <div className="relative flex items-center justify-center">
        <MdShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer" />
          <div className=" absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
          <p className="text-xs text-white font-semibold">3</p>
          </div>

          
        
      </div>
          </div>
      </div>

      <div className="flex md:hidden w-full h-full"></div>
    </header>
  )
}

export default Header