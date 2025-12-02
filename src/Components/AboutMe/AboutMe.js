import React from 'react'

function AboutMe(){

    return(
        <div className='flex flex-col mt-[2.7rem] lg:mt-[4rem]'>
            <div className='flex justify-center'><span className='text-[#00e6e6] text-[2rem] lg:text-[3rem] font-inter animate-pulse drop-shadow-[0_0_20px_#00ffff] drop-shadow-[0_0_40px_#00ffff]'>About Me</span></div>
                
                <div className='lg:grid grid-cols-2 place-items-center lg:mt-[2rem]'>
                    <div className='border-[0.2rem] border-[#00e6e6] mt-[2rem] w-[22rem] lg:w-[30rem]  lg:mt-[2.5rem] border-t-0 border-b-0 border-r-0 ps-[0.8rem]'>
                        <span className='text-white text-[1.3rem] lg:text-[2rem] font-inter'>Who I am</span><br />
                        <span className='text-white'>
                            I’m Kaveesha, currently an undergraduate at the Faculty of Computing, 
                            Sabaragamuwa University of Sri Lanka.I have a strong interest in frontend 
                            development and enjoy crafting responsive and intuitive web interfaces. 
                            I’m always eager to explore and apply modern web technologies in my projects.
                        </span>
                    </div>
                    
                    <div>
                    <div className='border-[0.2rem] border-[#00e6e6] border-t-0 border-b-0 border-r-0 mt-[2.5rem] w-[22rem] lg:w-[30rem] lg:mt-[2.5rem] ps-[0.8rem]'>
                        <span className='text-white text-[1.3rem] lg:text-[2rem] font-inter'>Education</span><br />
                        <span className='text-white'>BSc. (Hons) in Computing and Information Systems</span><br />
                        <span className='text-white'>Sabaragamuwa University of Sri Lanka</span><br />
                        <span className='text-white'>2024 - Present</span>
                    </div>
                </div>
            </div>

            <div className='relative mt-[4rem] lg:mt-[7rem] '>
                <div
                  className="relative z-10 p-8 border-2 border-[#00e6e6]"
                    style={{
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
                    maskImage: "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                    }}
                >
                <div className='text-center'><span className='text-white text-[1.3rem] lg:text-[2rem] font-inter'>Skills and Tools</span></div><br />

                <div className='grid grid-cols-3 lg:flex lg:justify-center gap-8'>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/c-original.svg" alt="C"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/java-original.svg" alt="Java"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/bootstrap-plain-wordmark.svg" alt="Bootstrap"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg" alt="React"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg" alt="HTML"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg" alt="Css"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mysql-original-wordmark.svg" alt="Mysql"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg" alt="Git"/>
                    </div>
                    <div className='block lg:hidden flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/figma-icon.svg" alt="Figma"/>
                    </div>
                    <div className='block lg:hidden flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg" alt="Tailwindcss"/>
                    </div>
                    
                </div>

                <div className='hidden lg:block lg:flex lg:justify-center mt-[1.5rem] gap-8'>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/figma-icon.svg" alt="Figma"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg" alt="Tailwindcss"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/BackendService/firebase-icon.svg" alt="Firebase"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Static/nextjs-2.svg" alt="Nextjs"  className='h-[5rem] w-[5rem] drop-shadow-[0_0_40px_#00ffff]'/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Mobile/flutterio-icon.svg" alt="Flutter"/>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe