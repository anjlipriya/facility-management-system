// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <h1 className="text-8xl font-bold text-blue-800 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Oops! The page you are looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/" variant="primary">
                BACK TO HOME
              </Button>
              <Button to="/contact" variant="outline">
                CONTACT SUPPORT
              </Button>
            </div>
          </div>
          
          {/* Right side illustration */}
          <div className="md:w-1/2 relative">
            {/* Main illustration */}
            <div className="bg-white rounded-lg shadow-xl p-6 relative z-10">
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Computer screen with error */}
                  <div className="bg-blue-100 rounded-lg w-full h-full flex flex-col items-center justify-center">
                    <div className="text-8xl font-bold text-blue-300">?</div>
                    <div className="bg-red-500 h-2 w-3/4 rounded my-4"></div>
                    <div className="bg-white h-2 w-1/2 rounded mb-2"></div>
                    <div className="bg-white h-2 w-2/3 rounded"></div>
                  </div>
                  
                  {/* Computer stand and base */}
                  <div className="mx-auto mt-2 w-16 h-10 bg-gray-200 relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Person at bottom left - confused */}
            <div className="absolute -bottom-6 left-20 z-20">
              <div className="relative">
                {/* Head */}
                <div className="bg-yellow-300 w-10 h-10 rounded-full absolute top-0 left-0"></div>
                {/* Body */}
                <div className="bg-blue-800 w-6 h-14 rounded-t-lg absolute top-8 left-2"></div>
                {/* Arm scratching head */}
                <div className="bg-yellow-300 w-8 h-6 rounded-full absolute top-4 left-8 transform -rotate-45"></div>
                {/* Question mark above head */}
                <div className="absolute -top-8 left-2 text-blue-800 font-bold text-xl">?</div>
              </div>
            </div>
            
            {/* Person at bottom right - also confused */}
            <div className="absolute -bottom-6 right-20 z-20">
              <div className="relative">
                {/* Head */}
                <div className="bg-yellow-300 w-10 h-10 rounded-full absolute top-0 right-0"></div>
                {/* Body */}
                <div className="bg-blue-800 w-6 h-14 rounded-t-lg absolute top-8 right-2"></div>
                {/* Arms up in confusion */}
                <div className="bg-yellow-300 w-6 h-10 rounded-full absolute top-12 right-8 transform -rotate-45"></div>
                <div className="bg-yellow-300 w-6 h-10 rounded-full absolute top-12 right-0 transform rotate-45"></div>
                {/* Question mark above head */}
                <div className="absolute -top-8 right-2 text-blue-800 font-bold text-xl">?</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-10 z-0">
              <div className="bg-teal-400 w-20 h-40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;





  
