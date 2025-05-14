import React, { useState } from 'react';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Submitting...');
    
    try {
      // Use your proxy server URL here
      const proxyUrl = 'https://genpay-backend-1.onrender.com/submit-waitlist';
      
      const response = await fetch(proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('🎉 Successfully joined the waitlist!');
        setFormData({ fullname: '', email: '', phonenumber: '' });
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus(`❌ ${error.message || 'Failed to join. Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
     <section className="bg-black text-white py-16 px-6">
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
    {/* Description Section */}
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">What Is GenPay?</h2>
        <p className="text-lg leading-relaxed">
          GenPay is an all-in-one social commerce platform designed for the modern event-goer. 
          Users can buy and sell tickets for events, as well as sell event-related items 
          such as merchandise, accessories, gadgets and more.
        </p>
      </div>
    </div>

    {/* Waitlist Form */}
    <div>
      <h3 className="text-2xl font-bold mb-6">Join Our Waitlist</h3>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleChange}
          className="w-full px-5 py-3 bg-black border border-white/30 text-white placeholder-white/50 rounded-none focus:outline-none focus:border-white/70"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-5 py-3 bg-black border border-white/30 text-white placeholder-white/50 rounded-none focus:outline-none focus:border-white/70"
          required
        />
        <input
          type="tel"
          name="phonenumber"
          placeholder="Phone Number"
          value={formData.phonenumber}
          onChange={handleChange}
          className="w-full px-5 py-3 bg-black border border-white/30 text-white placeholder-white/50 rounded-none focus:outline-none focus:border-white/70"
          required
        />
        <div className="flex items-center space-x-3">
          <input 
            type="checkbox" 
            id="email-updates" 
            className="h-4 w-4 accent-red-600" 
          />
          <label htmlFor="email-updates" className="text-sm">
            Receive emails from GenPay for updates
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#FF0000] text-white font-bold py-3 hover:bg-red-700 transition-colors disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'SUBMITTING...' : 'JOIN NOW'}
        </button>
        {status && <p className="text-sm mt-3 text-white/80">{status}</p>}
      </form>
    </div>
  </div>
</section>    // <section className="bg-white text-black px-6 py-12">
    //   <div className="max-w-2xl m-10 space-y-8">
    //     <div>
    //       <h2 className="text-2xl md:text-3xl font-bold mb-2">What Is GenPay?</h2>
    //       <p className="text-lg">
    //       GenPay is an all-in-one social commerce platform designed for the modern event-goer. Users can buy and sell tickets for events, as well as sell event related items such as merchandise, accessories, gadgets and more.
    //       </p>
    //     </div>

    //     <div>
    //       <h3 className="text-xl font-bold mb-4">Join our wait-list</h3>
    //       <form className="space-y-4" onSubmit={handleSubmit}>
    //         <input
    //           type="text"
    //           name="fullname"
    //           placeholder="Full Name"
    //           value={formData.fullname}
    //           onChange={handleChange}
    //           className="w-full px-4 py-2 border rounded-full"
    //           required
    //         />
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Email Address"
    //           value={formData.email}
    //           onChange={handleChange}
    //           className="w-full px-4 py-2 border rounded-full"
    //           required
    //         />
    //         <input
    //           type="tel"
    //           name="phonenumber"
    //           placeholder="Phone Number"
    //           value={formData.phonenumber}
    //           onChange={handleChange}
    //           className="w-full px-4 py-2 border rounded-full"
    //           required
    //         />
    //         <div className="flex items-center space-x-2">
    //           <input type="checkbox" id="email-updates" className="accent-black" />
    //           <label htmlFor="email-updates" className="text-sm">
    //             Receive emails from GenPay for updates
    //           </label>
    //         </div>
    //         <button
    //           type="submit"
    //           className="bg-black text-[rgba(229,255,0,1)] font-bold px-6 py-2 rounded-full hover:opacity-90 transition"
    //           disabled={isSubmitting}
    //         >
    //           {isSubmitting ? 'SUBMITTING...' : 'JOIN'}
    //         </button>
    //         {status && <p className="text-sm mt-2">{status}</p>}
    //       </form>
    //     </div>
    //   </div>
    // </section>
  );
};

export default WaitlistForm;