import React from 'react'

function AboutMe(){

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind",
        "Git",
        "GitHub",
        "Vercel",
        "Figma",
        "Canva",
    ];

    return(
        <div className='content-center mt-[2.7rem] lg:mt-[4rem]'>
            <div className='flex justify-center'><span className='text-[#00e6e6] text-[2rem] lg:text-[3rem] font-inter animate-pulse drop-shadow-[0_0_20px_#00ffff] drop-shadow-[0_0_40px_#00ffff]'>About Me</span></div>

            <div className='border-2 mt-[2rem] w-[22rem] p-4 lg:w-[30rem] mx-auto lg:mt-[2.5rem] lg:p-8'>
                <span className='text-white text-[1rem] lg:text-[2rem] font-inter'>Who I am</span><br />
                <span className='text-white'>
                    I’m Kaveesha, currently an undergraduate at the Faculty of Computing, 
                    Sabaragamuwa University of Sri Lanka. I have a strong interest in frontend 
                    development and enjoy crafting responsive and intuitive web interfaces. 
                    I’m always eager to explore and apply modern web technologies in my projects.
                </span>
            </div>

            <div className='border-2 lg:w-[30rem] mx-auto lg:mt-[2.5rem] p-8'>
                <span className='text-white text-[1rem] lg:text-[2rem] font-inter'>Education</span><br />
                <span className='text-white'>BSc. (Hons) in Computing and Information Systems</span><br />
                <span className='text-white'>Sabaragamuwa University of Sri Lanka</span><br />
                <span className='text-white'>2024 - Present</span>
            </div>

            <div className='lg:mt-[2.5rem]'>
                <div className='text-center'><span className='text-white text-[1rem] lg:text-[2rem] font-inter'>Skills and Tools</span></div><br />

                <div className='flex justify-center gap-8'>
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
                </div>

                <div className='flex justify-center mt-[1.5rem] gap-8'>
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
                </div>

                <div className='flex justify-center mt-[1.5rem] gap-8'>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/figma-icon.svg" alt="Figma"/>
                    </div>
                    <div className='flex items-center justify-center border-2 border-[#00e6e6] w-[6rem] h-[6rem] rounded-full drop-shadow-[0_0_40px_#00ffff] hover:scale-110'>
                        <img className='w-[4rem] h-[4rem]' src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg" alt="Tailwindcss"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe