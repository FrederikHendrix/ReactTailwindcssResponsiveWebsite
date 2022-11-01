import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='uppercase text-[#00df9a] text-xl font-bold'>grow with data analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Grow with data.</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 p-2'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='text-black font-bold w-[200px]  bg-[#00df9a] rounded-full my-4 mx-auto'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero