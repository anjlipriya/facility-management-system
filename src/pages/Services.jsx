import React, { useState, useEffect, useRef } from 'react';
import { ChefHat, Car, Briefcase, MoveDown, Sparkles, Shirt, CupSoda, ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import catering from '../assets/partyservice.jpg'
import bar from '../assets/barservice.jpg'
import transport from '../assets/cabService.jpg'
import cleaning from '../assets/cleaningservice.jpg'
import laundry from '../assets/laundryservice.jpg'
import support from '../assets/completesolutionimage.jpg'
import mainImage from '../assets/partyimage.jpg'
const Services = () => {
  const navigate=useNavigate();
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef(null);

  // Hero background image
  const heroBgImage = mainImage;
  
  useEffect(() => {
    setIsHeroVisible(true);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-element');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };
    
    handleScroll(); // Check on initial load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <ChefHat size={32} />,
      title: "Corporate Catering Excellence",
      description: "Premium food services tailored for corporate environments",
      items: [
        "Tailored meal plans for corporate preferences",
        "On-site & off-site catering for all scales",
        "Certified kitchen staff & food safety standards",
        "Daily corporate meals, events, and special menus"
      ],
      color: "bg-orange-500",
      image: catering
    },
    {
      icon: <CupSoda size={32} />,
      title: "Corporate Bar Solutions",
      description: "Complete management of corporate events and entertainment",
      items: [
        "Streamlined beverage services for corporate events",
        "Expert management of live concerts",
        "Ensuring quality and efficiency at every step",
        "Creating unforgettable experiences for all attendees"
      ],
      color: "bg-blue-500",
      image: bar
    },
    {
      icon: <Car size={32} />,
      title: "Employee Transportation Solutions",
      description: "Reliable transport services for your workforce",
      items: [
        "GPS-enabled, company-assigned vehicles",
        "Trained drivers & real-time tracking",
        "Route optimization for timely pickups/drop-offs",
        "Scalable fleet for different company sizes"
      ],
      color: "bg-teal-600",
      image: transport
    },
    {
      icon: <Sparkles size={32} />,
      title: "Professional Cleaning & Housekeeping",
      description: "Comprehensive cleaning solutions for corporate spaces",
      items: [
        "Daily deep-cleaning routines",
        "Restroom sanitation & waste management",
        "Trained staff with eco-friendly products",
        "Disinfection services & floor care"
      ],
      color: "bg-cyan-500",
      image: cleaning
    },
    {
      icon: <Shirt size={32} />,
      title: "Commercial Laundry & Garment Care",
      description: "Professional fabric care for businesses",
      items: [
        "Uniform and linen washing",
        "Industrial-grade cleaning equipment",
        "Pickup, washing, ironing & delivery",
        "Customized schedules for convenience"
      ],
      color: "bg-blue-600",
      image: laundry
    },
    {
      icon: <Briefcase size={32} />,
      title: "Complete Employee Support Solutions",
      description: "Comprehensive administrative and employee services",
      items: [
        "Onsite Assistance: Coordinators and service desks for daily employee needs",
        "Custom Packages: Solutions tailored to your company's specific requirements",
        "Technology-Enabled Management: Easy tracking, booking, and reporting through digital tools"
      ],
      color: "bg-orange-400",
      image: support
    }
  ];

  const handleContact=()=>{
    navigate("/contact")
  }
  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      {/* Hero Section with Background Image */}
      <div 
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed transition-opacity duration-1000 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),  url(${heroBgImage})`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4 py-2 px-4 rounded-full bg-white bg-opacity-10 backdrop-blur-sm">
              <span className="text-orange-400 font-medium">Premium Corporate Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              ELEVATING <span className="text-orange-400">WORKPLACE</span> EXPERIENCE
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed">
              At Vednex, we deliver exceptional corporate services that transform how businesses operate,
              ensuring convenience, comfort, and efficiency for your entire team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                Explore Services <MoveDown size={18} className="ml-2" />
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-medium py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center" onClick={handleContact}>
                Contact Us <Phone size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Scrolling indicator */}
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div> */}
      </div>

      {/* Services Grid Section with Alternating Layout */}
      <div className="py-24 bg-blue-900 bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 fade-in-element">Comprehensive Service Portfolio</h2>
            <div className="h-1 w-24 bg-orange-400 mx-auto my-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-element">
              Discover our full range of services designed to support your business operations
            </p>
          </div>
          
          <div className="space-y-24">
            {services?.map((service, idx) => (
              <div key={idx} className="fade-in-element">
                <div className={`grid md:grid-cols-2 gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`rounded-2xl overflow-hidden shadow-xl order-2 ${idx % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <img src={service.image} alt={service.title} className="w-full h-64 md:h-full object-cover" />
                  </div>
                  <div className={`flex flex-col justify-center order-1 ${idx % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`${service.color} text-white p-3 rounded-full flex items-center justify-center mr-4`}>
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`${service.color} text-white rounded-full p-1 mr-3 mt-1`}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <button className={`${service.color} hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md self-start flex items-center shadow-md transition-all duration-300`}>
                      Learn More <ArrowRight size={18} className="ml-2" />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-24 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white fade-in-element">Trusted by Industry Leaders</h2>
            <div className="h-1 w-24 bg-orange-400 mx-auto my-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto fade-in-element">
              See what our clients have to say about our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-xl p-8 fade-in-element">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Vednex has transformed our workplace environment. Their comprehensive services have improved employee satisfaction and productivity significantly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
                    <img src="/api/placeholder/100/100" alt="Client" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">John Smith</h4>
                    <p className="text-sm text-gray-600">HR Director, Fortune 500 Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="rgba(255,255,255,0.1)"></path>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 fade-in-element">Ready to Transform Your Workplace Experience?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 fade-in-element">
            We handle the essentials, so your team can focus on what matters most — achieving success.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-blue-700 hover:bg-blue-50 py-4 px-10 rounded-md font-medium shadow-lg transition-all duration-300 transform hover:scale-105 fade-in-element flex items-center" onClick={handleContact}>
              Request a Consultation <ArrowRight size={18} className="ml-2" />
            </button>
            {/* <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 py-4 px-10 rounded-md font-medium shadow-lg transition-all duration-300 transform hover:scale-105 fade-in-element">
              View Pricing Plans
            </button> */}
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .fade-in-element {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in-element.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;