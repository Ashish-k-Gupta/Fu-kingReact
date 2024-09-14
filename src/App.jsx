import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HorizontalCard from './components/HorizontalCard'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Link } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={ <h1>My App</h1> }/>)
)

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/> 
    <HorizontalCard/>
   </>
  )
}

export default App
