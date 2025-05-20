import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToWaitlistForm = () => {
    const element = document.getElementById('WaitlistForm');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="relative">
      <nav className="bg-black w-full px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          GenPay
        </div>

        {/* Desktop buttons */}
        <div className="hidden lg:flex gap-4">
          <button
            className="text-white px-5 py-2 rounded-full"
            style={{ backgroundColor: 'rgba(255, 0, 0, 1)', fontFamily: '"Poppins", sans-serif' }}
          >
            GenPay
          </button>
          <button
            onClick={scrollToWaitlistForm}
            className="text-white px-5 py-2 rounded-full"
            style={{ backgroundColor: 'rgba(48, 48, 48, 1)', fontFamily: '"Poppins", sans-serif' }}
          >
            About US
          </button>
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="grid grid-cols-2 gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5"
                style={{ backgroundColor: 'rgba(255, 0, 0, 1)' }}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black z-50 px-8 py-4">
          <div className="flex flex-col gap-4">
            <button
              className="text-white px-5 py-2 rounded-full w-full text-center"
              style={{ backgroundColor: 'rgba(255, 0, 0, 1)', fontFamily: '"Poppins", sans-serif' }}
            >
              GenPay
            </button>
            <button
              onClick={scrollToWaitlistForm}
              className="text-white px-5 py-2 rounded-full w-full text-center"
              style={{ backgroundColor: 'rgba(48, 48, 48, 1)', fontFamily: '"Poppins", sans-serif' }}
            >
              About US
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;