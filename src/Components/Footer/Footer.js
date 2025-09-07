import React from 'react'
import { FaHome, FaUser, FaFolderOpen, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-[#1a1a1a] mt-[1rem]">
      <div className='flex flex-col items-center lg:grid lg:grid-cols-2 lg:place-items-center lg:gap-8'>
        <div className='flex flex-col items-center lg:items-start mt-[3rem] mb-[3rem]'>
          <span className='text-[#00e6e6] text-[1.5rem] font-inter'>Quick Links</span>
          <div className='mt-[0.6rem]'>
            <a href='#home' className='flex items-center gap-2'><FaHome className='text-white'/><span className='text-white'>Home</span></a>
            <a href='#about' className='flex items-center gap-2'><FaUser className='text-white'/><span className='text-white'>About Me</span></a>
            <a href='#projects' className='flex items-center gap-2'><FaFolderOpen className='text-white'/><span className='text-white'>Projects</span></a>
            <a href='#contact' className='flex items-center gap-2'><IoMdMail className='text-white'/><span className='text-white'>Contact</span></a>
          </div>
        </div>
        <div className='lg:mt-[3rem] mb-[3rem]'>
          <span className='flex flex-col items-center lg:items-start text-[#00e6e6] text-[1.5rem] font-inter'>Reach Out</span>
          <div className='flex flex-col items-center lg:items-start mt-[0.6rem]'>
            <a href='mailto:kaveeshasandeepanim@gmail.com' className='flex items-center gap-2 text-white'><MdOutlineMail className='text-[1.2rem]'/><span className='text-[1.1rem]'>kaveeshasandeepanim@gmail.com</span></a>
            <a href='https://www.linkedin.com/in/kaveesha-sandeepani-836411334/' className='flex items-center gap-2 text-white'><FaLinkedin className='text-[1.2rem]'/><span className='text-[1.1rem]'>LinkedIn</span></a>
            <a href='https://www.facebook.com/share/1Z4jWtV1zU/' className='flex items-center gap-2 text-white'><FaFacebook className='text-[1.2rem]'/><span className='text-[1.1rem]'>Facebook</span></a>
            <a href='https://github.com/kaveeshasm' className='flex items-center gap-2 text-white'><FaGithub className='text-[1.2rem]'/><span className='text-[1.1rem]'>GitHub</span></a>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex flex-col items-center mt-[1rem]'>
        <span className='text-white'>&copy; 2025 Kaveesha Sandeepani. All Rights Reserved.</span>
        <span className='text-white mb-[1rem]'>Design and Development by Kaveesha Sandeepani.</span>
      </div>
    </div>
  )
}

export default Footer