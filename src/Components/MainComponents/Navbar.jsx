import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-gradient-to-r from-orange-500 to-orange-700">
      <div className="flex items-center justify-between w-full md:w-auto">
        <span className="text-lg font-bold text-white">Roomman</span>
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <X/> : <Menu/>}
        </button>
      </div>
      <ul className={`flex-col md:flex-row md:flex md:items-center ${isOpen ? 'flex' : 'hidden'} md:block`}>
        <li className="mr-6">
          <button className="text-white hover:text-gray-900 transition duration-500">
            Home
          </button>
        </li>
        <li className="mr-6">
          <button className="text-white hover:text-gray-900 transition duration-500">
            About
          </button>
        </li>
        <li className="mr-6">
          <button className="text-white hover:text-gray-900 transition duration-500">
            Contact
          </button>
        </li>
      </ul>
      <div className={`flex-col md:flex-row md:flex md:items-center ${isOpen ? 'flex' : 'hidden'} md:block`}>
        <button className="bg-transparent hover:bg-gray-600 transition duration-700 text-white font-bold py-2 px-4 rounded ">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
