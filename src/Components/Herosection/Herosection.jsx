import React, { useState } from 'react';
import backgroundImage from '../../assets/images/background.jpg';
import firstheroimg from '../../assets/images/firstheroimg.jpg';
import secondheroimg from '../../assets/images/secondhero.jpg';
import thirdheroimg from '../../assets/images/thirdhero.jpg';
import logo from '../../assets/images/genpaylogo.png';
import WaitlistForm from '../WaitlistForm/WaitlistForm';
const Herosection = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen text-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage || "/placeholder.svg"}
          alt="Background"
          className="object-cover w-full h-full brightness-40"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation
        <nav className="flex justify-between items-center p-6">
          <div className="flex items-center">
            <img src={logo} alt="GenPay Logo" className="w20 h-20 mr-2" />
            <p>Gen</p>
            <span className="font-bold text-[rgba(229,255,0,1)]">Pay</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[rgba(229,255,0,1)]">
              Home
            </a>
            <a href="#" className="text-white">
              About Us
            </a>
          </div>
        </nav> */}

<nav className="flex justify-between items-center p-6 relative z-50">
  {/* Logo */}
  <div className="flex items-center">
    <img src={logo} alt="GenPay Logo" className="w-20 h-20 mr-2" />
    <p className="text-white">Gen</p>
    <span className="font-bold text-[rgba(229,255,0,1)]">Pay</span>
  </div>

  {/* Desktop Nav */}
  <div className="hidden lg:flex gap-6">
    <a href="#" className="text-[rgba(229,255,0,1)] font-medium">
      Home
    </a>
    <a href="#" className="text-white font-medium">
      About Us
    </a>
  </div>

  {/* Burger Icon - Small Screens Only */}
  <div className="lg:hidden">
  <button
  onClick={toggleMenu}
  className="relative w-6 h-5 flex flex-col justify-between items-center z-50 ml-auto md:hidden"
  aria-label="Toggle menu"
>
  <span
    className={`block w-full h-0.5 bg-[rgba(229,255,0,1)] transform transition duration-300 ease-in-out ${
      isMenuOpen ? "rotate-45 translate-y-1.5" : ""
    }`}
  />
  <span
    className={`block w-full h-0.5 bg-[rgba(229,255,0,1)] transition-opacity duration-300 ${
      isMenuOpen ? "opacity-0" : "opacity-100"
    }`}
  />
  <span
    className={`block w-full h-0.5 bg-[rgba(229,255,0,1)] transform transition duration-300 ease-in-out ${
      isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
    }`}
  />
</button>

  </div>
</nav>

{/* Mobile Menu */}
<div
  className={`lg:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out ${
    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
  }`}
>
  <a href="#" className="text-[rgba(229,255,0,1)] text-2xl" onClick={toggleMenu}>
    Home
  </a>
  <a href="#" className="text-white text-2xl" onClick={toggleMenu}>
    About Us
  </a>
</div>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              BUY.SELL.
              <br />
              NETWORK
            </h1>
            <h2 className="text-[rgba(229,255,0,1)] text-2xl font-semibold">Welcome to GenPay</h2>
            <p className="text-gray-300 max-w-md">
              Beyond transactions, GenPay fosters connection through its integrated social space, allowing users to
              chat, network, and make new friends around shared event experiences.
            </p>
            <button className="bg-[rgba(229,255,0,1)] text-black font-medium px-8 py-2 rounded-full hover:bg-[rgba(210,235,0,1)] transition">About Us</button>
          </div>

          {/* Right Column - Images
          <div className="md:w-1/2 grid grid-cols-2 gap-4 relative">
            <div className="col-span-2 border-2 border-[rgba(229,255,0,1)] rounded-lg overflow-hidden h-40">
              <img
                src={firstheroimg || "/placeholder.svg"}
                alt="People at an event"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="border-2 border-[rgba(229,255,0,1)] rounded-lg overflow-hidden h-40">
              <img
                src={secondheroimg || "/placeholder.svg"}
                alt="People dancing"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="border-2 border-[rgba(229,255,0,1)] rounded-lg overflow-hidden h-40">
              <img
                src={thirdheroimg || "/placeholder.svg"}
                alt="Concert lights"
                className="object-cover w-full h-full"
              />
            </div>
          </div> */}

          {/* Right Column - Tilted Images */}
<div className="md:w-1/2 flex flex-col items-center gap-4 relative">
  <div className="border-4 border-[#E5FF00] rounded-lg overflow-hidden h-40 w-48 transform rotate-[15deg]">
    <img
      src={firstheroimg || "/placeholder.svg"}
      alt="People at an event"
      className="object-cover w-full h-full"
    />
  </div>

  <div className="border-4 border-[#E5FF00] rounded-lg overflow-hidden h-40 w-48 transform -rotate-[5deg]">
    <img
      src={secondheroimg || "/placeholder.svg"}
      alt="People dancing"
      className="object-cover w-full h-full"
    />
  </div>

  <div className="border-4 border-[#E5FF00] rounded-lg overflow-hidden h-40 w-48 transform rotate-[15deg]">
    <img
      src={thirdheroimg || "/placeholder.svg"}
      alt="Concert lights"
      className="object-cover w-full h-full"
    />
  </div>
</div>

        </main>
      </div>
   
    </div>
    
  );
};

export default Herosection;


