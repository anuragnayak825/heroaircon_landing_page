import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThankYouCard from './ThankYouCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/aircon/' element={<LandingPage />}></Route>
          <Route path='/aircon/thank-you' element={<ThankYouCard />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
