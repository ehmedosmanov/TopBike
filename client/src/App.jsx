import React from 'react'
import Main from './layout/Main'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Shop from './pages/ShopPage'
import './App.scss'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
      </Route>
      {/* <Route path='about' element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
