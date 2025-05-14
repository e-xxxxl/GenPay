import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black w-full px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        GenPay
      </div>

      {/* Desktop buttons */}
      <div className="hidden lg:flex gap-4">
        <button
          className="text-white px-5 py-2 rounded-full"
          style={{ backgroundColor: 'rgba(255, 0, 0, 1)', fontFamily:' "Poppins", sans-serif' }}
        >
          GenPay
        </button>
        <button
          className="text-white px-5 py-2 rounded-full"
          style={{ backgroundColor: 'rgba(48, 48, 48, 1)', fontFamily:' "Poppins", sans-serif' }}
        >
          About US
        </button>
      </div>

      {/* Mobile menu icon */}
      <div className="lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
  );
};

export default Navbar;
