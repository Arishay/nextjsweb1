import React from 'react'
import Image from 'next/image'
import fries from '../components/public/PizzaFries.jpg'
import pasta from '../components/public/pasta.webp'
import pizza from '../components/public/italianpizza.jpg'


export default function ProductList() {
  return (
    <div className=' font-bold text-center p-4'>
      <h1 className='text-4xl text-center p-4 '>Our special Items</h1>
      <div className='flex h-80 justify-around'>
      <div className=' w-1/4  '>
      <Image
      src={fries}
      alt='fries'
      width={700}
      height={700}
      className='shadow shadow-slate-500 rounded-lg'
      />
      <h2>Pizza Fries</h2>
      </div>
      <div className=' w-1/4'>      
      <Image
      src={pasta}
      alt='fries'
      width={700}
      height={700}
      className='shadow shadow-slate-500 rounded-lg'
      />
      <h2>Pasta</h2></div>
      <div className=' w-1/4 '>
      <Image
      src={pizza}
      alt='fries'
      width={700}
      height={700}
      className='shadow shadow-slate-500 rounded-lg'
      />
      <h2>Italian Pizza</h2></div>
      </div>
    </div>
  )
}
