import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../Photos/image.png';

function Navbar() {
  return (
    <nav className="bg-very-dark-gray text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between">
        <div className="flex items-center">
        <img src={profilePic} alt="Icono" className="w-6 h-6 mr-2 rounded-full " />
          <h1 className="text-xl font-bold">La Marshalada</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">Acerca de mi</Link>
          <Link to="/stats" className="hover:text-gray-300">Picks/Stats</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;