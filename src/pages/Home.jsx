// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { ChevronRight, Coffee, Car, Users, Star, MessageCircle, Clock, Settings, Heart, BrushCleaning } from 'lucide-react';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceData = [
    { icon: <Coffee />, title: "Corporate Catering & Food Management", description: "Customized meal plans, on-site/off-site catering, and full-service food ecosystem management." },
    { icon: <BrushCleaning />, title: "Professional Cleaning & Housekeeping", description: "Comprehensive cleaning solutions to maintain a spotless and welcoming workplace." },
    { icon: <Users />, title: "Employee Transportation & Commercial Laundry", description: "Efficient transportation services and smart garment care with tailored schedules and eco-friendly solutions." },
  ];


  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Left side content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mb-10 md:mb-0 z-10"
          >
   <motion.h1
  initial={{ y: -20, opacity: 0 }}
  animate={isLoaded ? { y: 0, opacity: 1 } : {}}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="text-5xl font-bold text-gray-900 leading-tight mb-6"
>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
    Integrated Facility Management
  </span>
  <br />
  That Elevates Your Business
</motion.h1>

<motion.p
  initial={{ y: 20, opacity: 0 }}
  animate={isLoaded ? { y: 0, opacity: 1 } : {}}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="text-lg text-gray-600 mb-8 max-w-lg"
>
  At Vednex, we go beyond facility management — we improve your workplace, enhance employee comfort, and streamline daily operations. From fresh meals and spotless offices to safe transport and laundry care, we handle it all under one roof so you can focus on growth.
</motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button to="/about" variant="primary" className="flex items-center group">
                <span>MORE INFO</span>
                <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side illustration */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 relative"
          >
            {/* Main computer illustration */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg shadow-xl p-6 relative z-10"
            >
              {/* Computer screen with content lines */}
              <div className="bg-blue-100 rounded-lg w-full h-64 flex">
                <div className="w-1/2 p-4">
                  {/* Content lines with animation */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isLoaded ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-white h-2 w-full rounded mb-3"
                  ></motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isLoaded ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="bg-white h-2 w-full rounded mb-3"
                  ></motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isLoaded ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="bg-white h-2 w-full rounded mb-5"
                  ></motion.div>

                  {/* Circle and line content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isLoaded ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="flex items-center mb-4"
                  >
                    <div className="bg-white h-8 w-8 rounded-full mr-2"></div>
                    <div className="bg-white h-2 w-16 rounded"></div>
                  </motion.div>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={isLoaded ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="bg-white h-2 w-full rounded mb-3"
                  ></motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isLoaded ? { width: "75%" } : {}}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="bg-white h-2 w-3/4 rounded"
                  ></motion.div>
                </div>

                <div className="w-1/2 p-4 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isLoaded ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="bg-blue-300 w-3/4 h-20 rounded"
                  ></motion.div>
                </div>
              </div>

              {/* Computer stand and base */}
              <div className="mx-auto mt-2 w-16 h-10 bg-gray-200 relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-300 rounded"></div>
              </div>
            </motion.div>

            {/* Person at top illustration */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-16 right-10 z-20"
            >
              <div className="relative">
                {/* Head */}
                <div className="bg-yellow-300 w-10 h-10 rounded-full absolute top-0 right-0"></div>
                {/* Body */}
                <div className="bg-blue-800 w-6 h-16 rounded-t-lg absolute top-8 right-2"></div>
                {/* Arm reaching down */}
                <motion.div
                  animate={{ rotate: [45, 55, 45] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="bg-yellow-300 w-20 h-6 rounded-full absolute top-12 right-6 transform rotate-45"
                ></motion.div>
              </div>
            </motion.div>

            {/* Person at bottom left */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -bottom-6 left-20 z-20"
            >
              <div className="relative">
                {/* Head */}
                <div className="bg-yellow-300 w-10 h-10 rounded-full absolute top-0 left-0"></div>
                {/* Body */}
                <div className="bg-blue-800 w-6 h-14 rounded-t-lg absolute top-8 left-2"></div>
                {/* Arms holding box */}
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="bg-blue-300 w-12 h-8 rounded absolute top-16 left-6"
                ></motion.div>
              </div>
            </motion.div>

            {/* Person at bottom right */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute -bottom-6 right-20 z-20"
            >
              <div className="relative">
                {/* Head */}
                <div className="bg-yellow-300 w-10 h-10 rounded-full absolute top-0 right-0"></div>
                {/* Body */}
                <div className="bg-blue-800 w-6 h-14 rounded-t-lg absolute top-8 right-2"></div>
                {/* Arms up */}
                <motion.div
                  animate={{ rotate: [-45, -35, -45] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="bg-yellow-300 w-6 h-10 rounded-full absolute top-12 right-8 transform -rotate-45"
                ></motion.div>
                <motion.div
                  animate={{ rotate: [45, 35, 45] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="bg-yellow-300 w-6 h-10 rounded-full absolute top-12 right-0 transform rotate-45"
                ></motion.div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 -right-10 z-0"
            >
              <div className="bg-teal-400 w-20 h-40 rounded-full"></div>
            </motion.div>

            {/* Small blue box */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute bottom-10 right-10 z-30"
            >
              <div className="bg-blue-300 w-12 h-8 rounded"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section - Card Layout */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section - Feature List with Image */}
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 2 }}
      className="bg-white py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="max-w-3xl mx-auto">
          <motion.ul className="space-y-8">
            <motion.li
              initial={{ x: 50, opacity: 0 }}
              animate={isLoaded ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="flex items-start"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-5 text-blue-600 flex-shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Reliable and Timely Services</h3>
                <p className="text-gray-600 text-lg">Count on us for punctual delivery and consistent service quality, every single time.</p>
              </div>
            </motion.li>

            <motion.li
              initial={{ x: 50, opacity: 0 }}
              animate={isLoaded ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="flex items-start"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-5 text-blue-600 flex-shrink-0">
                <Settings size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Customized Solutions</h3>
                <p className="text-gray-600 text-lg">Tailored specifically to meet your company's unique needs and challenges.</p>
              </div>
            </motion.li>

            <motion.li
              initial={{ x: 50, opacity: 0 }}
              animate={isLoaded ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 2.6 }}
              className="flex items-start"
            >
              <div className="bg-blue-100 p-3 rounded-full mr-5 text-blue-600 flex-shrink-0">
                <Heart size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Employee-Focused</h3>
                <p className="text-gray-600 text-lg">Prioritizing comfort, convenience, and care for your most valuable asset—your team.</p>
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.div>

      {/* Testimonials - Carousel Style */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto bg-gradient-to-tr from-blue-600 to-blue-500 rounded-xl shadow-xl p-1">
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current mx-1" size={24} />
              ))}
            </div>
            <blockquote className="text-xl text-center italic text-gray-600 mb-6">
              "Transformed our office culture completely! The services provided are reliable, efficient, and have made a significant impact on our workplace environment."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">Maria Chen</p>
                <p className="text-sm text-gray-500">HR Director</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button className="h-3 w-3 mx-1 rounded-full bg-blue-600"></button>
              <button className="h-3 w-3 mx-1 rounded-full bg-gray-300"></button>
              <button className="h-3 w-3 mx-1 rounded-full bg-gray-300"></button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 2.4 }}
        className="bg-blue-600 py-16 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isLoaded ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.6, type: "spring" }}
                className="text-4xl font-bold mb-2"
              >
                98%
              </motion.div>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isLoaded ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.7, type: "spring" }}
                className="text-4xl font-bold mb-2"
              >
                500+
              </motion.div>
              <p className="text-blue-100">Corporate Clients</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isLoaded ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.8, type: "spring" }}
                className="text-4xl font-bold mb-2"
              >
                10,000+
              </motion.div>
              <p className="text-blue-100">Services Delivered</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isLoaded ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.9, type: "spring" }}
                className="text-4xl font-bold mb-2"
              >
                24/7
              </motion.div>
              <p className="text-blue-100">Support Available</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 3 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Workplace?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of forward-thinking companies that have already enhanced their employee experience.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          to="/about"
        >
            
            <Link to="/contact"> Get Started Today</Link>
        </motion.button>
      </motion.div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890?text=Hi%20there!%20I%20need%20more%20info."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 3.2 }}
      >
        <MessageCircle className="text-white" size={28} />
      </motion.a>
    </div>
  );
};

export default Home;