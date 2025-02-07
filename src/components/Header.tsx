import React, { useState } from 'react';
import { Search, Linkedin, Instagram, Facebook, Twitter, Youtube, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <>
      <header className="bg-white py-4 px-4 md:px-6 flex items-center justify-between relative z-50">
        <div className="flex items-center">
          <div className="flex items-center">
            
            <img className="text-gray-900 font-serif block text-lg tracking-wider ml-1" style={{height:"45px"}} src="/image.png" alt="" />
          </div>
          
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
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

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
        <div className="h-full overflow-y-auto pt-20 px-6">
          <nav className="flex flex-col space-y-6">
            <a href="#" className="text-gray-900 text-xl font-light">About Us</a>
            <a href="#" className="text-gray-900 text-xl font-light">Stories</a>
            <a href="#" className="text-gray-900 text-xl font-light">Our Work</a>
            <a href="#" className="text-gray-900 text-xl font-light">Learning</a>
            <a href="#" className="text-gray-900 text-xl font-light">Grants</a>
            <a href="#" className="text-gray-900 text-xl font-light">Careers</a>
            <div className="flex items-center space-x-4 pt-6">
              <Search className="w-5 h-5 text-gray-900" />
              <Linkedin className="w-5 h-5 text-gray-900" />
              <Instagram className="w-5 h-5 text-gray-900" />
              <Facebook className="w-5 h-5 text-gray-900" />
              <Twitter className="w-5 h-5 text-gray-900" />
              <Youtube className="w-5 h-5 text-gray-900" />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;