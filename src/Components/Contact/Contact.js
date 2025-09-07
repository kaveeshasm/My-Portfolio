import React,  { useEffect } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {

  useEffect(() => {
    const form = document.querySelector("form");
    if (!form) return;

    const handleSubmit = async (e) => {
      e.preventDefault();

      const data = new FormData(form);

      await fetch(form.action, {
        method: "POST",
        body: data,
        mode: "no-cors", 
      });

      alert("Thank you! Your message has been sent.");
      form.reset();
    };

    form.addEventListener("submit", handleSubmit);

    return () => form.removeEventListener("submit", handleSubmit);
  }, []);


  return (
    <div className='mt-[2.7rem] lg:mt-[4rem]'>
      <div className='flex justify-center'><span className='text-[#00e6e6] text-[2rem] lg:text-[3rem] font-inter animate-pulse drop-shadow-[0_0_20px_#00ffff] drop-shadow-[0_0_40px_#00ffff]'>Get in Touch</span></div>
      <div className='lg:grid grid-cols-2'>
        <div className='text-[1rem] ml-[2rem] mt-[1.5rem] lg:mt-[4rem] lg:ml-[6rem] lg:text-[1.3rem]'>
          <span className='text-white font-poppins'>Let’s connect! <br />Whether it’s a project, collaboration, <br />or just a friendly chat, feel free to reach out.</span>
          <div className='mt-[1rem] lg:mt-[3rem]'>
            <div className='flex gap-4'><MdOutlineMail className='text-[#00e6e6] w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]'/><a href='mailto:kaveeshasandeepanim@gmail.com'><span className='text-[#00e6e6] text-[1.1rem] lg:text-[1.4rem]'>Email</span></a></div>
            <div className='flex gap-4 mt-[0.5rem] lg:mt-[1rem]'><FaLinkedin className='text-[#00e6e6] w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]'/><a href='https://www.linkedin.com/in/kaveesha-sandeepani-836411334/'><span className='text-[#00e6e6] text-[1.1rem] lg:text-[1.4rem]'>LinkedIn</span></a></div>
            <div className='flex gap-4 mt-[0.5rem] lg:mt-[1rem]'><FaGithub className='text-[#00e6e6] w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem]'/><a href='https://github.com/kaveeshasm'><span className='text-[#00e6e6] text-[1.1rem] lg:text-[1.4rem]'>GitHub</span></a></div>
          </div>
        </div>
        <div className='flex justify-center lg:justify-start mt-[3rem] lg:mt-[4rem]'>
          <div className='border-2 border-[#00e6e6] align-center w-[20rem] lg:w-[26rem] flex flex-col items-center p-10 mb-[2.7rem] rounded-[0.7rem]'>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSdWFiSfqtO7PAqDKegDW0rU_917R5utefTD_YcisY4yCgaKPA/formResponse"
              method='POST'
            >
              <input name='entry.1833391892' type='text' placeholder='Your Name' className='text-white border-2 border-white rounded-[0.5rem] bg-inherit w-[17rem] h-[2rem] lg:w-[20rem] lg:h-[3rem] px-3' required/><br />
              <input name='entry.1236284392' type='email' placeholder='Your Email' className='text-white border-2 border-white rounded-[0.5rem] bg-inherit  w-[17rem] h-[2rem] mt-[1.5rem] lg:w-[20rem] lg:h-[3rem] lg:mt-[1.5rem] px-3'/><br />
              <textarea name='entry.259192401' placeholder='Message' className='text-white border-2 border-white rounded-[0.5rem] bg-inherit lg:w-[20rem]  w-[17rem] h-[5rem] mt-[1.5rem] lg:h-[7rem] lg:mt-[1.5rem] px-3' required/><br />
              <button type='submit' className=' mt-[1.5rem] border-2 border-[#00e6e6] bg-inherit rounded-[0.5rem] w-[17rem] h-[2rem] lg:h-[2.5rem] lg:w-[20rem] text-white hover:bg-[#00b3b3] hover:scale-105'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact