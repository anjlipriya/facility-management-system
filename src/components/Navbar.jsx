import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo1.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`;
    const locationWithSlash = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
    return locationWithSlash === pathWithSlash || location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12 w-auto rounded-xl shadow-sm" />
          <span className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">Vednex Corporate Solution</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium text-gray-700 hover:text-blue-600 transition-transform hover:scale-105
                ${isActive(link.path) ? 'text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-blue-500 after:rounded-full' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 transition">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-inner transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block rounded-md px-3 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition
                ${isActive(link.path) ? 'bg-blue-100 text-blue-600 font-semibold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
