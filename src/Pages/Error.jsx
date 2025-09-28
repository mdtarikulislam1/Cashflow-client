import React from 'react'
import { Link } from 'react-router'

export default function Error() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-3'>
      <img src="https://i.postimg.cc/0NsCp1rx/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg" alt="Error image" />
     <Link to='/'><button className='text-white bg-red-500 hover:bg-red-600 py-2 px-6 cursor-pointer font-bold rounded-lg'>Home</button></Link>
    </div>
  )
}
