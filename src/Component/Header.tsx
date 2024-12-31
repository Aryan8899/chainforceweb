//import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-screen z-50">
      {/* Top Blue Bar */}
      <div 
        className="w-full bg-blue-600 relative"
        style={{
          background: 'linear-gradient(90deg, rgb(37, 99, 235) 70%, rgb(29, 78, 216) 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-20">
          <div className="flex justify-end py-2">
            <div className="flex items-center text-white gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm">connect@mobiloitte.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto px-20">
          <div className="flex items-center justify-between py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 flex items-center justify-center rotate-45">
                <span className="text-white text-xl font-bold -rotate-45">M</span>
              </div>
              <div>
                <h1 className="text-blue-600 text-2xl font-bold">Mobiloitte</h1>
                <p className="text-gray-500 text-xs tracking-wide">BOTS APPS DIGITAL AI/ML</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Company</a>
              <a href="#" className="text-blue-600">Industries</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">AI/ML</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Blockchain</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Digital</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Global Presence</a>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <button aria-label="Search" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button aria-label="Menu" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;