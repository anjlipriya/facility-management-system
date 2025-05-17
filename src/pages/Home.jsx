import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Coffee, 
  Users, 
  Star, 
  MessageCircle, 
  Clock, 
  Settings, 
  Heart, 
  BrushCleaning,
  CupSoda,
  Drum,
  ChevronLeft,
  ArrowRight,
  Building,
  Award,
  Shirt
} from 'lucide-react';

import corporate1 from '../assets/businessdiscussion.jpg';
import corporate2 from '../assets/businessmeeting.jpg';
import corporate3 from '../assets/businesspresentation.jpg';
import meeting1 from '../assets/background.jpg';
import meeting2 from '../assets/partypeople.jpg';
import events from '../assets/eventsimages.jpg';
import barEvent2 from '../assets/partyimage2.jpg';
import catering1 from '../assets/dinning.jpg';
import catering2 from '../assets/catering2.jpg';
import caterimage from '../assets/caterservice.jpg';
import celebration from '../assets/celebration.jpg';
import team1 from '../assets/profile.jpg';
import team2 from '../assets/Team.jpg';
import laundry from '../assets/laundry.jpg';
import housekeeping from '../assets/housekeeping.jpg';
import cabService from '../assets/cabService.jpg'

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
    
    // Auto rotate testimonials
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    // Auto rotate hero images
    const heroInterval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroImages.length);
    }, 6000);
    
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(heroInterval);
    };
  }, []);

  const heroImages = [
    { 
      img: corporate1, 
      title: "Integrated Bussiness Management",
      subtitle: "That Elevates Your Business",
      description: "Transforming workplace experiences through comprehensive solutions that enhance comfort and productivity."
    },
    { 
      img: catering1, 
      title: "Corporate Catering Excellence",
      subtitle: "Fresh, Delicious, Customized",
      description: "Delivering high-quality food solutions that energize your team and impress your clients."
    },
    { 
      img: events, 
      title: "Dynamic Corporate Events",
      subtitle: "Memorable Experiences",
      description: "Creating engaging corporate gatherings that foster connection and celebration."
    }
  ];

  const serviceData = [
    { 
      icon: <Coffee />, 
      title: "Corporate Catering & Food Management", 
      description: "Customized meal plans, on-site/off-site catering, and full-service food ecosystem management.",
      image: catering2
    },
    { 
      icon: <BrushCleaning />, 
      title: "Professional Cleaning & Housekeeping", 
      description: "Comprehensive cleaning solutions to maintain a spotless and welcoming workplace.",
      image: housekeeping
    },
    { 
      icon: <Users />, 
      title: "Employee Transportation", 
      description: "Efficient transportation services and smart garment care with tailored schedules and eco-friendly solutions.",
      image: cabService
    },
    { 
      icon: <CupSoda />, 
      title: "Corporate Bar Solutions", 
      description: "Efficiently managing corporate beverage services and experiences with seamless coordination.",
      image: barEvent2
    },
    { 
      icon: <Shirt />, 
      title: " Commercial Laundry", 
      description: " Smart garment care with tailored schedules and eco-friendly solutions.",
      image: laundry
    },
  ];

  const testimonials = [
    {
      quote: "Transformed our office culture completely! The services provided are reliable, efficient, and have made a significant impact on our workplace environment.",
      name: "Maria Chen",
      position: "HR Director, TechGlobal Inc.",
      rating: 5,
      image: team1
    },
    {
      quote: "Vednex has revolutionized how we approach workplace management. Their integrated solutions saved us time, money, and headaches.",
      name: "Robert Johnson",
      position: "CEO, Innovative Solutions",
      rating: 5,
      image: team2
    },
    {
      quote: "The catering services are exceptional - our team looks forward to lunch every day! And the cleaning staff maintains our office impeccably.",
      name: "Sarah Williams",
      position: "Operations Manager, Future Finance",
      rating: 5,
      image: meeting2
    }
  ];

  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen overflow-x-hidden">
      {/* Hero Section with Image Carousel */}
      <div className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen flex items-center overflow-hidden">
        {/* Image Carousel */}
        {heroImages.map((hero, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeSlide === index ? 1 : 0,
              scale: activeSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${hero.img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50"></div>
          </motion.div>
        ))}

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between text-white"
          >
            {/* Left side content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isLoaded ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <motion.h1
                key={activeSlide}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl font-bold leading-tight mb-6"
              >
                <span className="text-white">
                  {heroImages[activeSlide].title}
                </span>
                <br />
                <span className="text-blue-200">
                  {heroImages[activeSlide].subtitle}
                </span>
              </motion.h1>

              <motion.p
                key={`desc-${activeSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg mb-8 max-w-lg text-gray-100"
              >
                {heroImages[activeSlide].description}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isLoaded ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-4"
              >
                <Button to="/about" variant="primary" className="flex items-center group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all">
                  <span>DISCOVER MORE</span>
                  <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
                
                <Button to="/contact" variant="secondary" className="flex items-center group bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all">
                  <span>CONTACT US</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side - Hero Navigation Indicators */}
            <div className="absolute bottom-10 right-10 flex gap-2">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeSlide === idx ? "bg-white scale-125" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Comprehensive solutions to elevate your workplace experience and drive operational excellence.
          </p>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-blue-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-blue-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          {/* Scrollable Services */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-8 py-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {serviceData.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)",
                }}
                className="min-w-[320px] max-w-[320px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {/* <Link to="/services" className="text-blue-600 font-medium flex items-center group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Feature Showcase with Image Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="rounded-lg overflow-hidden h-64"
              >
                <img src={meeting1} alt="Corporate Meeting" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="rounded-lg overflow-hidden h-64"
              >
                <img src={celebration} alt="Bar Event" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="rounded-lg overflow-hidden h-48"
              >
                <img src={caterimage} alt="Catering Service" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="rounded-lg overflow-hidden h-48"
              >
                <img src={corporate2} alt="Corporate Event" className="w-full h-full object-cover" />
              </motion.div>
              
            </div>
            
            {/* Right Column - Feature List */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Leading Companies Choose Vednex</h2>
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
                    <h3 className="text-2xl font-semibold mb-2">Reliable and Timely Solutions</h3>
                    <p className="text-blue-100 text-lg">Count on us for punctual delivery and consistent service quality, every single time.</p>
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
                    <h3 className="text-2xl font-semibold mb-2">Customized Experiences</h3>
                    <p className="text-blue-100 text-lg">Tailored specifically to meet your company's unique needs and challenges.</p>
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
                    <h3 className="text-2xl font-semibold mb-2">Employee-Focused Approach</h3>
                    <p className="text-blue-100 text-lg">Prioritizing comfort, convenience, and care for your most valuable asset—your team.</p>
                  </div>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section - Modern Card Design */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 2.8 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Hear from businesses that have transformed their workplace with our solutions.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: activeTestimonial === index ? 1 : 0,
                y: activeTestimonial === index ? 0 : 30,
                position: activeTestimonial === index ? 'relative' : 'absolute'
              }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current mx-1" size={24} />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-lg text-blue-800">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-3 w-3 rounded-full transition-all ${
                  activeTestimonial === idx ? "bg-blue-600 scale-125" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 3.0 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 3.2, type: "spring" }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="text-5xl font-bold mb-2 text-white">98%</div>
              <p className="text-blue-100 text-lg">Client Satisfaction</p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 3.3, type: "spring" }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="text-5xl font-bold mb-2 text-white">500+</div>
              <p className="text-blue-100 text-lg">Corporate Clients</p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 3.4, type: "spring" }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="text-5xl font-bold mb-2 text-white">10,000+</div>
              <p className="text-blue-100 text-lg">Services Delivered</p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 3.5, type: "spring" }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="text-5xl font-bold mb-2 text-white">24/7</div>
              <p className="text-blue-100 text-lg">Support Available</p>
            </motion.div>
          </div>
        </div>
      </motion.div> */}

      {/* Featured Benefits Grid */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 3.6 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Vednex Advantage</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Experience the difference our integrated solutions make for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 3.7 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-blue-600">
              <Building size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Single Point of Contact</h3>
            <p className="text-gray-600">Simplify management with one dedicated team handling all your facility needs.</p>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 3.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-blue-600">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Quality Standards</h3>
            <p className="text-gray-600">Rigorous quality control across all services to ensure excellence at every touchpoint.</p>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 3.9 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-blue-600">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Time & Resource Efficiency</h3>
            <p className="text-gray-600">Free up your team to focus on core business while we handle support functions.</p>
          </motion.div>
        </div>
      </motion.div> */}

      {/* CTA Section with Background Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 4.0 }}
        className="relative py-24"
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${corporate3})` }}></div>
        <div className="absolute inset-0 bg-blue-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Workplace?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies that have already enhanced their employee experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 py-4 px-8 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Link to="/contact">Get Started Today</Link>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Link to="/services">Explore Services</Link>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Floating WhatsApp Button */}
      {/* <motion.a
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
      </motion.a> */}
    </div>
  );
};

export default Home;