import React from 'react'
import Image from './Image.jpg'

function Home() {
  return (
    <div className='lg:grid grid-cols-2'>
        <div className='flex justify-center'>
          <img className='rounded-full mt-[2.5rem] h-[15rem] w-[15rem] border-[0.5rem] border-black border-double shadow-[0_0_30px_20px_rgba(0,128,128,0.8)] animate-pulse lg:h-[30rem] lg:w-[30rem] lg:mt-[5rem] relative z-10' src={Image} />
        </div>
        <div>
          <span className='text-white'>I'm Kaveesha</span>
          <span></span>
        </div>

    </div>
  )
}

export default Home