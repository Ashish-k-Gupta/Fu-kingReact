import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Link } from 'react-router-dom'
import About from './pages/About'
import RequestQuote from './pages/RequestQuote'
import Hiring from './pages/Hiring'
import ContactUs from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    
  <Route path='/' element={ <MainLayout/> }>
  <Route index element={ <HomePage/> }/>
  <Route path='/about' element={ <About/> }/>
  <Route path='/contact' element={ <ContactUs/> }/>
  <Route path='/hiring' element={ <Hiring/> }/>
  <Route path='/requestQuote' element={ <RequestQuote/> }/>

  </Route>
  )
)

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
