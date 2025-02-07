import React from 'react';
import { Search, Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center">
          <span className="text-gray-900 font-serif uppercase text-lg tracking-wider">Walton Family</span>
          <span className="text-gray-900 font-serif block text-lg tracking-wider ml-1">Foundation</span>
        </div>
        <div className="flex space-x-1 ml-1">
          <div className="w-2 h-2 bg-yellow-500"></div>
          <div className="w-2 h-2 bg-green-500"></div>
          <div className="w-2 h-2 bg-blue-500"></div>
        </div>
      </div>
      
      <div className="flex items-center space-x-12">
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">About Us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Stories</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Our Work</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Learning</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Grants</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Careers</a>
          <Search className="w-4 h-4 text-gray-700 hover:text-gray-900 cursor-pointer" />
        </nav>
        <div className="flex items-center space-x-4">
          <Linkedin className="w-4 h-4 text-gray-600 hover:text-gray-900" />
          <Instagram className="w-4 h-4 text-gray-600 hover:text-gray-900" />
          <Facebook className="w-4 h-4 text-gray-600 hover:text-gray-900" />
          <Twitter className="w-4 h-4 text-gray-600 hover:text-gray-900" />
          <Youtube className="w-4 h-4 text-gray-600 hover:text-gray-900" />
        </div>
      </div>
    </header>
  );
};

export default Header;