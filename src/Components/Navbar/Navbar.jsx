import { useState } from "react";
import { Menu, X } from "lucide-react";

 import React from 'react'
 
 const Navbar = () => {
    const [open, setOpen] = useState(false);
   return (
     <>
     <nav className="bg-[#0B0C10] text-white px-6 md:px-20 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-[#00FF9C] font-bold text-xl">
          <span className="bg-[#00FF9C] text-black rounded-full px-2 py-1 font-bold">G</span>
          <span>GenPay</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="text-[#D4FF00]">Home</a>
          <a href="#" className="hover:text-[#00FF9C] transition">About Us</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 space-y-4 text-sm font-medium px-4">
          <a href="#" className="block text-[#D4FF00]">Home</a>
          <a href="#" className="block hover:text-[#00FF9C]">About Us</a>
        </div>
      )}
    </nav>
     
     </>
   )
 }
 
 export default Navbar