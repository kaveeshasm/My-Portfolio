import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaHome, FaUser, FaFolderOpen } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar height
      menuItems.forEach((item) => {
        const section = document.querySelector(item.link);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(item.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="!bg-[#1a1a1a]">
        <Toolbar className="flex justify-between items-center">
          <span className="text-lg lg:text-2xl font-inter font-bold text-[#00e6e6] drop-shadow-[0_0_10px_#00ffff]">
            Kaveesha Sandeepani
          </span>

          <div className="hidden md:flex space-x-6 text-white">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`flex items-center space-x-2 whitespace-nowrap transition-colors pb-1 ${
                activeSection === item.name
                  ? "border-b-2 border-cyan-400"
                  : "hover:border-b-2 hover:border-cyan-400"
              }`}
              >
                {item.name === "Home" && <FaHome size={18} />}
                {item.name === "About Me" && <FaUser size={18} />}
                {item.name === "Projects" && <FaFolderOpen size={18} />}
                {item.name === "Contact" && <IoMdMail size={18} />}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          <div className="md:hidden text-white">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </Toolbar>
      </AppBar>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 py-3 space-y-2 text-white">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`flex items-center space-x-2 block py-2 transition-colors ${
                  activeSection === item.name
                    ? "border-b-2 border-cyan-400"
                    : "hover:border-b-2 hover:border-cyan-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name === "Home" && <FaHome size={18} />}
                {item.name === "About Me" && <FaUser size={18} />}
                {item.name === "Projects" && <FaFolderOpen size={18} />}
                {item.name === "Contact" && <IoMdMail size={18} />}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </Box>
  );
}

export default NavBar;
