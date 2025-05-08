import React from 'react'
import Navbar from './src/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './src/Components/Footer'

const RootLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout