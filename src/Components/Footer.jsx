import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-50 min-w-full -ml-5 border-t border-gray-200 -mb-5 p-4'>
      <div className='flex justify-between items-center'>
        <h4 className='flex gap-3 px-2'>© 2025 <span className='hidden sm:flex'><span className='text-blue-800'>CashFlow</span>, All Rights Reserved</span></h4>
        <p>Version 1.0</p>
      </div>
    </div>
  )
}
