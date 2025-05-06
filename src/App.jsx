import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/Herosection/Herosection'
import WaitlistForm from './Components/WaitlistForm/WaitlistForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Herosection/>
    <WaitlistForm/>


    </>
  )
}

export default App
