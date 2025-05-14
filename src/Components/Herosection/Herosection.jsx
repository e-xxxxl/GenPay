import React, { useState } from 'react';
import new1 from '../../assets/images/new1.jpg';
import new2 from '../../assets/images/new2.jpg';
import Navbar from '../Navbar/Navbar';

const Herosection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Navbar />


     <section className="bg-black text-white px-4 md:px-8 py-8 md:py-12 space-y-8 md:space-y-16">
      {/* Top Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-left md:text-center lg:text-left md:p-4 lg:p-8">
        Your gateway to creative events, merch <br className="hidden lg:block" />
        and meaningful connections.
      </h1>

      {/* GenPay Community Card */}
      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-[#240026] max-w-5xl mx-auto">
        {/* Text Content */}
        <div className="p-6 md:p-8 lg:p-10 md:w-1/2 text-white flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-wide">GenPay</h2>
          <p className="text-sm md:text-base mb-4 md:mb-6 leading-relaxed opacity-90">
            Beyond transactions, GenPay foster connection through its integrated social space, allowing users to chat,
            network, and make new friends around shared event experiences.
          </p>
          <div className="mb-4 md:mb-0">
            <button className="px-5 md:px-6 py-2 rounded-full text-white bg-[rgba(255,0,0,1)] hover:bg-[rgba(255,0,0,0.9)] transition-colors text-sm font-medium">
              Check Out Social Network
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="h-[250px] md:h-[500px] md:w-1/2 overflow-hidden">
          <img
            src={new1 || "/placeholder.svg?height=500&width=500"}
            alt="GenPay community"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Events Card */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 max-w-5xl mx-auto rounded-3xl">
        {/* Image - Order changes based on screen size */}
        <div className="order-2 md:order-1 md:w-1/2 overflow-hidden rounded-3xl p-1 bg-[rgba(36,0,38,1)]">
          <div className="overflow-hidden rounded-2xl h-[250px] md:h-[280px]">
            <img
              src={new2 || "/placeholder.svg?height=280&width=400"}
              alt="Event Crowd"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Box - Order changes based on screen size */}
        <div className="order-1 md:order-2 md:w-1/2 p-6 md:p-4 text-white">
          <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 leading-relaxed font-mono tracking-wide">
            Ready for what's next? From live concerts and exclusive shows to underground experiences and pop-up vibes -
            Your next big memory starts here!
          </p>
          <div className="mb-4 md:mb-0">
            <button className="px-5 md:px-6 py-2 rounded-full text-white bg-[rgba(255,0,0,1)] hover:bg-[rgba(255,0,0,0.9)] transition-colors text-sm">
              Explore Events
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Herosection;
