import { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Herosection from './Components/Herosection/Herosection'
import WaitlistForm from './Components/WaitlistForm/WaitlistForm'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Analytics />
      <div className="fade-in hero-section">
        <Herosection />
      </div>
      <div className="fade-in waitlist-form">
        <WaitlistForm />
      </div>
      <div className="fade-in footer">
        <Footer />
      </div>
    </>
  )
}

export default App
