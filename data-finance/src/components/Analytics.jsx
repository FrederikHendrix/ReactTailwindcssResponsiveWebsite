import React from 'react'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid'>
            <div className='flex md:flex-row flex-col justify-start items-center text-[#000300]'>
                <h1 className='font-bold p-4'>Machines:</h1>
                <p className='font-semibold p-4'>The machine has multiple molds. Ranging form different object to different technical ways of installing them.
                To install different molds you need to first add them to the list. When clicking next mold you will be taken to a page explaining in more 
                detail how this principle works</p>
                <button className='bg-[#00df9a] rounded-md text-black p-4 font-bold'>Add Mold</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics