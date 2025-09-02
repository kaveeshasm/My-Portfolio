import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFolderOpen } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="!bg-[#1a1a1a]">
        <Toolbar className="flex justify-between items-center">
          <span className="text-lg lg:text-2xl font-bold text-white">
            Kaveesha Sandeepani
          </span>

          <div className="hidden md:flex space-x-6 text-white">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="flex items-center space-x-2 whitespace-nowrap hover:text-gray-300 transition-colors"
              >
                {item.name === "Home" && <FaHome size={18} />}
                {item.name === "About Me" && <FaUser size={18} />}
                {item.name === "Projects" && <FaFolderOpen size={18} />}
                {item.name === "Contact" && <IoMdMail size={18} />}
                <span>{item.name}</span>
              </Link>
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
              <Link
                key={item.name}
                to={item.link}
                className="flex items-center space-x-2 whitespace-nowrap block py-2 hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name === "Home" && <FaHome size={18} />}
                {item.name === "About Me" && <FaUser size={18} />}
                {item.name === "Projects" && <FaFolderOpen size={18} />}
                {item.name === "Contact" && <IoMdMail size={18} />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </Box>
  );
}

export default NavBar;
