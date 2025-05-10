// src/components/Footer.jsx
import { Link,useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { Linkedin,Instagram ,Facebook,Twitter} from 'lucide-react';


const Footer = () => {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname == '/') {
      window.location.reload();
    } }

    const handleAboutClick = () => {
      if (location.pathname == '/about') {
        window.location.reload();
      } }
      const handleWorkClick = () => {
        if (location.pathname == '/services') {
          window.location.reload();
        } }
        const handleContactClick = () => {
          if (location.pathname == '/contact') {
            window.location.reload();
          }
        }
    
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          <div> <img src={logo} alt="Logo" className="h-20 w-auto mb-4" /> </div>           
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white" onClick={handleHomeClick}>Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white" onClick={handleAboutClick}>About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white" onClick={handleWorkClick}>Our Work</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white" onClick={handleContactClick}>Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white" onClick={handleWorkClick}>Corporate Food Services</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white"  onClick={handleWorkClick}>Cab & Transportation Services</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white"  onClick={handleWorkClick}>Complete Employee Support Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white"  onClick={handleWorkClick}>Cleaning</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p>644, 6th Floor, Gaur City Centre<br/> Sector 4, Bisrakh</p>
              <p>Gautam Buddha Nagar <br/>201306, Uttar Pradesh</p>
              <p className="mt-3">Email: info@vednex.com</p>
              <p>Phone: +91-9911688335</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Vednex Corporate Solution. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook />  
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <Twitter />
            </a> */}
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/company/vednex/" className="text-gray-400 hover:text-white">
              <span className="sr-only">Linkdln</span>
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;