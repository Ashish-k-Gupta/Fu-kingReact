import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
   </>
  )
}

export default App
