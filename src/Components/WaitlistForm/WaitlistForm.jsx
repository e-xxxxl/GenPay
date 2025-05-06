import React from 'react'

const WaitlistForm = () => {
  return (
    <>
    
    <section className="bg-white text-black px-6 py-12">
<div className="max-w-2xl m-10 space-y-8">
  <div>
    <h2 className="text-2xl md:text-3xl font-bold mb-2">What Is GenPay?</h2>
    <p className="text-lg">
      GenPay is an all-in-one social commerce platform designed for the modern event-goer. Users can buy and
      sell tickets for events, as well as sell event related items such as merchandise, accessories,
      gadgets and more.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-bold mb-4">Join our wait-list</h3>
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-full" />
      <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-full" />
      <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-full" />
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="email-updates" className="accent-black" />
        <label htmlFor="email-updates" className="text-sm">Receive emails from GenPay for updates</label>
      </div>
      <button
        type="submit"
        className="bg-black text-[rgba(229,255,0,1)] font-bold px-6 py-2 rounded-full hover:opacity-90"
      >
        JOIN
      </button>
    </form>
  </div>
</div>
</section>
    </>
  )
}

export default WaitlistForm