import { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Herosection from './Components/Herosection/Herosection'
import WaitlistForm from './Components/WaitlistForm/WaitlistForm'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Analytics/>
     <Herosection/>
    <WaitlistForm/>
    <Footer/>



    </>
  )
}

export default App
