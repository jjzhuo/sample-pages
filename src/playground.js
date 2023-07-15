import React from 'react'
import MyImg from '../public/food-1.jpeg'

export function Playground() {
  return (
    <div
      className='p-6 rounded-lg overflow-hidden shadow-xl max-w-md mx-auto bg-blue-200 transform transition hover:scale-105'
      data-uid='285'
    >
      <img
        className='w-full h-64 rounded-lg object-cover mb-6'
        src={MyImg}
        alt='Roasted Cauliflower & Garlic Dip'
        data-uid='7f7'
      />
      <h2 className='text-2xl text-gray-800 font-semibold mb-3'>
        Roasted Cauliflower & Garlic Dip
      </h2>
      <p className='text-gray-700 mb-5'>
        A yummy and healthy recipe for homemade roasted
        cauliflower dip, perfect for a casual get together.
      </p>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <img
            className='h-10 w-10 rounded-full mr-2'
            src='https://place-hold.it/100'
            alt='avatar'
          />
          <div>
            <p className='text-gray-800'>John Doe</p>
            <p className='text-gray-400 text-sm'>
              Feb 20, 2022
            </p>
          </div>
        </div>
        <div className='flex items-center ml-auto'>
          <button className='px-4 py-2 rounded text-white bg-indigo-500 hover:bg-indigo-600'>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}
