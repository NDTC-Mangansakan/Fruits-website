import React from 'react'
import RootLayout from '../RootLayout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Popular from './Pages/Popular'
import Join from './Pages/Join'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='popular' element={<Popular />} />
        <Route path='join' element={<Join />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App