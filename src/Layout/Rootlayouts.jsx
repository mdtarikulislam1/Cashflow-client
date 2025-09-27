import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

export default function Rootlayouts() {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div>
          <Navbar/>
      </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}
