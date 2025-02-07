import React from 'react';
import { Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4">
            <span className="text-4xl font-light">W</span>
            <div className="flex space-x-1 mt-2">
              <div className="w-3 h-3 bg-yellow-500"></div>
              <div className="w-3 h-3 bg-green-500"></div>
              <div className="w-3 h-3 bg-blue-500"></div>
            </div>
          </div>
          <h3 className="text-xl mb-8">Where Opportunity Takes Root</h3>
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="hover:text-gray-300">Stories</a>
            <a href="#" className="hover:text-gray-300">Our Work</a>
            <a href="#" className="hover:text-gray-300">Learning</a>
            <a href="#" className="hover:text-gray-300">Grants</a>
            <a href="#" className="hover:text-gray-300">Careers</a>
            <a href="#" className="hover:text-gray-300">Newsroom</a>
            <a href="#" className="hover:text-gray-300">FAQs</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </nav>
          <p className="text-sm mb-4">P.O. Box 2030, Bentonville, AR 72712 | Social Media</p>
          <div className="flex space-x-4">
            <Linkedin className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
          </div>
        </div>
        <div className="text-sm text-center border-t border-gray-700 pt-8">
          <p>© 2025 Walton Family Foundation | Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;