// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Helper function to check if a link is active
  const isActive = (path) => {
    // For the home path, only match exact '/'
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    // For other paths, check if the pathname starts with the path
    // but avoid matching partial paths (e.g. /about shouldn't match /about-us)
    if (path !== '/') {
      const pathWithSlash = path.endsWith('/') ? path : `${path}/`;
      const locationWithSlash = location.pathname.endsWith('/') 
        ? location.pathname 
        : `${location.pathname}/`;
        
      return locationWithSlash === pathWithSlash || location.pathname === path;
    }
    return false;
  };

  return (
    <>

      {/* Main light navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <img 
           src={logo} 
           alt="Company Logo" 
           className="h-20 w-50 object-contain"
          />


            
            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`py-2 font-medium text-gray-800 hover:text-blue-600 ${isActive('/') ? 'border-b-2 border-blue-400' : ''}`}>
                Home
              </Link>
              <Link to="/about" className={`py-2 font-medium text-gray-800 hover:text-blue-600 ${isActive('/about') ? 'border-b-2 border-blue-400' : ''}`}>
                About 
              </Link>
              <Link to="/services" className={`py-2 font-medium text-gray-800 hover:text-blue-600 ${isActive('/services') ? 'border-b-2 border-blue-400' : ''}`}>
                Services
              </Link>
              {/* <Link to="/info" className={`py-2 font-medium text-gray-800 hover:text-blue-600 ${isActive('/info') ? 'border-b-2 border-blue-400' : ''}`}>
                Testinomials
              </Link> */}
              <Link to="/contact" className={`py-2 font-medium text-gray-800 hover:text-blue-600 ${isActive('/contact') ? 'border-b-2 border-blue-400' : ''}`}>
                Contact
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/services') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Services
            </Link>
            <Link 
              to="/info" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/info') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Testinomials
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/contact') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      
      {/* Secondary navigation with breadcrumbs */}
    
    </>
  );
};

export default Navbar;