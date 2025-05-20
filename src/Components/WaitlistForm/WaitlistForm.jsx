import React from 'react';

const WaitlistForm = () => {
  return (
    <section 
      id="WaitlistForm" 
      className="bg-black text-white py-20 px-6 md:py-28"
      aria-labelledby="what-is-genpay-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Description Section */}
          <div className="space-y-8">
            <div>
              <h2 
                id="what-is-genpay-heading"
                className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300"
              >
                What Is GenPay?
              </h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                  GenPay is revolutionizing social commerce for event enthusiasts. Our platform empowers the modern event-goer with seamless ticket transactions and beyond.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                  Buy and sell tickets for any event, plus discover and offer event-related merchandise, exclusive accessories, and cutting-edge gadgets - all in one place.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Secure ticket transactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Expanded marketplace for event goods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Community-driven experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-3xl font-bold mb-8 text-center">Join Our Waitlist</h3>
            <div className="space-y-6">
              <p className="text-gray-300 text-center">
                Be the first to experience GenPay when we launch!
              </p>
              <a
                href="https://newsletter.page/genpayng"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 text-center text-lg shadow-lg hover:shadow-red-900/30 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                JOIN NOW
              </a>
              <p className="text-gray-400 text-sm text-center">
                No spam, just exciting updates about our launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;