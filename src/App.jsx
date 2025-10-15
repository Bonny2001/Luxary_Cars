import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
const App = () => {
  const [myCart , setMyCart] = useState([])
  return (
    <><div className='pt-14'>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home myCart={myCart} setMyCart={setMyCart} />} />
          <Route path='/cart' element={<Cart myCart={myCart} setMyCart={setMyCart } />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
