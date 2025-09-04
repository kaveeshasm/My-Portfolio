import React from 'react'
import Image from './Image.jpg'
import { FaFacebook, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";

function Home() {
  return (
    <div className='lg:grid grid-cols-2'>
        <div className='flex justify-center'>
          <img className='rounded-full mt-[2.5rem] mb-[2.5rem] h-[15rem] w-[15rem] border-[0.5rem] border-black border-double shadow-[0_0_30px_20px_rgba(0,128,128,0.8)] lg:h-[30rem] lg:w-[30rem] lg:mt-[5rem] lg:mb-[5rem] relative z-10' src={Image} />
        </div>
        <div className='text-white ml-[1.5rem] text-center lg:text-left lg:ml-0 lg:mt-[3rem]'>
          <span className='text-4xl font-inter bg-gradient-to-r from-[#00b3b3] via-[#00e6e6] to-[#ffffff] bg-clip-text text-transparent [background-size:400%_400%] animate-gradient-x lg:text-6xl'>I'm Kaveesha</span><br />
          <span className='text-lg font-poppins text-cyan-600 overflow-hidden whitespace-nowrap border-r-4 border-[#00b3b3] 
           w-[34ch] inline-block  animate-typing animate-blink lg:text-3xl'>Passionate about Frontend Development</span><br />
          <span className='text-lg font-poppins text-cyan-700 lg:text-[1.1rem]'>Undergraduate at the Faculty of Computing, Sabaragamuwa University of Sri Lanka.</span><br /><br />
          <span className='text-base font-openSans lg:text-[1.1rem]'>I focus on building clean, responsive, and user-friendly frontend experiences, while continuously exploring modern technologies.</span>

          <div className='mt-[4rem]'>
            <button className='flex items-center justify-center lg:w-[10rem] lg:h-[5rem] border-2 border-[#00e6e6] rounded-xl hover:animate-moveAround hover:shadow-[0_0_20px_5px_#00e6e6]'><FaUser className='flex mr-[1rem] text-lg text-[#00e6e6]' /><span className='text-[#00e6e6]'>About Me</span></button>
          </div>

          <div className='mt-[3.5rem]'>
            <span className='text-white text-[1.5rem] lg:text-[2rem] font-raleway'>Reach Out</span><br />
            <div className='flex justify-center text-[2rem] lg:justify-start lg:text-[3rem] gap-2'>
              <a href='https://www.linkedin.com/in/kaveesha-sandeepani-836411334/'><FaLinkedin className='text-[#0A66C2] hover:rotate-12' /></a>
              <a href='https://www.facebook.com/share/1Z4jWtV1zU/'><FaFacebook className='text-[#1877F2] hover:rotate-12' /></a>
              <a href='https://github.com/kaveeshasm'><FaGithub className='hover:rotate-12' /></a>
            </div>

          </div>
        </div>

    </div>
  )
}

export default Home