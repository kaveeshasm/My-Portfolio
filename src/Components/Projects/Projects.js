import React from "react";
import ApexHealth from "./ApexHealth.png";
import WebifyMe from "./WebifyMe.png";
import GPAPlus from "./GPAPlus.png";
import SmileHub from "./SmileHub.png";
import Nextjs from "../AboutMe/Nextjs.png";
import { PiGlobeThin } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Smile Hub",
    image: SmileHub,
    description:
      "SmileHub is a responsive dental clinic website that helps patients easily access services, view clinic details, and book appointments online. It focuses on simplicity, usability, and a smooth user experience. It is built using modern web technologies to ensure fast performance and reliability.",
    tech: [
      Nextjs,
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/BackendService/firebase-icon.svg",
    ],
    live: "https://smilehublanka.vercel.app/",
    github: "https://github.com/nngeek195/Dental-Smilehub",
  },
  {
    title: "GPA+",
    image: GPAPlus,
    description:
      "GPA+ is a simple, user-friendly web app that helps students instantly calculate their GPA with ease. It supports year-based weighting for more accurate results and lets users compare their GPA within a growing community. The platform makes academic tracking clearer, faster, and stress-free.",
    tech: [
      Nextjs,
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/BackendService/firebase-icon.svg",
    ],
    live: "https://plusgpa.vercel.app/",
    github: "https://github.com/kaveeshasm/GPA-Calculator",
  },
  {
    title: "Webify.me",
    image: WebifyMe,
    description:
      "Webify.me is an AI-powered platform that brings your ideas to life as stunning presentations in seconds. It turns concepts into professional, visually engaging slides without any manual effort. The purpose is to make creating presentations fast, effortless, and impressive every time.",
    tech: [
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/ballerina/ballerina-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    ],
    live: "https://webifyme.vercel.app/",
    github: "https://github.com/nngeek195/webify.me",
  },
  {
    title: "Apex Health Hospital",
    image: ApexHealth,
    description:
      "Apex Health Hospital is a static website built to present the hospital’s services, facilities, and departments in a clear and professional way. Its purpose is to provide visitors with essential information and highlight the hospital’s commitment to quality care.",
    tech: [
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/bootstrap-plain-wordmark.svg",
    ],
    live: "https://apexhealth.vercel.app/",
    github: "https://github.com/kaveeshasm/ApexHealth",
  },
];

function Projects() {
  return (
    <div className="mt-[3.5rem]">
      <div className="flex justify-center">
        <span className="text-[#00e6e6] text-[2rem] lg:text-[3rem] font-inter animate-pulse drop-shadow-[0_0_20px_#00ffff] drop-shadow-[0_0_40px_#00ffff]">
          My Projects
        </span>
      </div>

      <div className="mt-[2.5rem] lg:flex lg:flex-wrap lg:justify-center lg:gap-28 lg:mt-[3rem]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mt-[2.5rem] ml-[1.9rem] h-[32rem] w-[22rem] border-2 border-white rounded-[1rem] lg:ml-0 lg:h-[33.5rem] lg:w-[30rem] lg:rounded-[2rem] hover:scale-105"
          >
            <img
              src={project.image}
              className="h-[12rem] w-[22rem] lg:h-[12rem] lg:w-[30rem] lg:rounded-t-[1.85rem] rounded-t-[0.8rem]"
              alt=""
            />

            <div className="ml-[0.7rem] mt-[0.5rem] lg:mr-[0.7rem]">
              <span className="text-white font-raleway text-[1.5rem]">
                {project.title}
              </span>

              <div className="mt-[0.5rem]">
                <span className="text-white">
                  {project.description}
                </span>

                <div className="flex gap-4 items-center justify-center mt-[0.5rem]">
                  {project.tech.map((icon, i) => (
                    <img
                      key={i}
                      className="w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]"
                      src={icon}
                      alt="tech"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-[1.7rem] flex gap-4 lg:mt-[3.2rem]">
                <a href={project.live}>
                  <div className="lg:h-[3rem] lg:w-[3rem] rounded-full border-2 border-[#00e6e6] flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_4px_#00ffff]">
                    <PiGlobeThin className="lg:h-[2rem] lg:w-[2rem] text-white" />
                  </div>
                </a>

                <a href={project.github}>
                  <div className="lg:h-[3rem] lg:w-[3rem] rounded-full border-2 border-[#00e6e6] flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_4px_#00ffff]">
                    <FaGithub className="lg:h-[2rem] lg:w-[2rem] text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;