import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../Photos/image.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-very-dark-gray text-white">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src={profilePic} alt="Icono" className="w-6 h-6 mr-2 rounded-full" />
          <h1 className="text-xl font-bold">La Marshalada</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } flex-col md:flex md:flex-row md:space-x-4`}
          >
            <Link to="/" className="block py-2 px-4 hover:text-gray-300">Home</Link>
            <Link to="/about" className="block py-2 px-4 hover:text-gray-300">Acerca de mi</Link>
            <Link to="/stats" className="block py-2 px-4 hover:text-gray-300">Picks/Stats</Link>
            <Link to="/casas" className="block py-2 px-4 hover:text-gray-300">Casas de Apuestas</Link>
            <Link to="/test" className="block py-2 px-4 hover:text-gray-300">Test Landing</Link>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
