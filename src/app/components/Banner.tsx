import React from 'react'
import Image from 'next/image'
import pizza from '../components/public/pizzaa-removebg-preview.png'

export default function Banner() {
  return (
    <div className='h-96 flex bg-orange-200'>
      <div className="p-9 w-1/2">
        <h1 className=' text-5xl font-bold p-4 font-serif'>Delivering the best pizza's Only</h1>
        <p className='text-2xl p-4'>we have the worlds best chef we are also providing  pizza's on discounted rates</p>
        <button className=' hover:bg-orange-200 bg-orange-400 px-7 py-2 font-bold '>Buy Now</button>
      </div>
      <div className=' p-3 w-96'>
        
<Image
src={pizza}
alt='pizza'
width={700}
height={700}
className='w-96 h-72 '
/>
      </div>

    </div>
  )
}
