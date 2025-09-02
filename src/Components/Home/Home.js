import React from 'react'
import Image from './Image.jpg'

function Home() {
  return (
    <div className='lg:grid grid-cols-2'>
        <div className='flex justify-center'>
          <img className='rounded-full mt-[2.5rem] mb-[2.5rem] h-[15rem] w-[15rem] border-[0.5rem] border-black border-double shadow-[0_0_30px_20px_rgba(0,128,128,0.8)] lg:h-[30rem] lg:w-[30rem] lg:mt-[5rem] lg:mb-[5rem] relative z-10' src={Image} />
        </div>
        <div className='text-white ml-[1.5rem] text-center lg:text-left lg:ml-0 lg:mt-[3rem]'>
          <span className='text-4xl font-inter bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent lg:text-6xl'>I'm Kaveesha</span><br />
          <span className='text-xl font-poppins lg:text-3xl'>Passionate about Frontend Development</span><br />
          <span className='text-lg font-poppins lg:text-[1.1rem]'>Undergraduate at the Faculty of Computing, Sabaragamuwa University of Sri Lanka.</span><br /><br />
          <span className='text-base font-openSans lg:text-[1.1rem]'>I focus on building clean, responsive, and user-friendly frontend experiences, while continuously exploring modern technologies.</span>
        </div>

    </div>
  )
}

export default Home