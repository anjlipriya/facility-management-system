import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Briefcase, Target, Heart, Mail, Linkedin } from 'lucide-react';
import about from '../assets/AboutUs.jpg';
import team from '../assets/Team.jpg';
// You'll need to import leader images
import founderImg from '../assets/founder.jpg'; // Add these images to your assets folder
import cofounderImg from '../assets/cofounder.jpg';
import mdImg from '../assets/md.jpg';
import { useNavigate } from 'react-router-dom';

function About() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setAnimate(true);
    window.scrollTo(0, 0);
  }, []);
  
  const cards = [
    {
      title: "Our Mission",
      content: "We specialize in making corporate life smoother, easier, and more comfortable. We provide a range of essential services — including food delivery, cab transportation, and other employee-focused solutions — designed specifically for the needs of today's busy workplaces.",
      icon: <Target className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Our Approach",
      content: "We understand that when employees are taken care of, they perform their best. That's why we partner with leading organizations to offer on-time meals, safe and reliable rides, and personalized support services that help teams stay energized, productive, and focused.",
      icon: <Users className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Our Commitment",
      content: "With a commitment to quality, efficiency, and customer satisfaction, our goal is simple: to take care of the everyday essentials, so your team can take care of what matters most.",
      icon: <Heart className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Our Promise",
      content: "Whether you're a growing startup or an established enterprise, Vednex is here to support your employees — every step of the way. Experience the difference of truly employee-centric services.",
      icon: <Briefcase className="h-8 w-8 text-blue-500" />
    }
  ];

  // Team members data
  const teamValues = [
    "Collaboration", 
    "Innovation", 
    "Excellence", 
    "Integrity"
  ];
  
  // Leadership team data
  const leadershipTeam = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in corporate services and hospitality management, Sarah founded Vednex with a vision to transform workplace experiences. Her innovative approach and passionate leadership have established new standards of excellence in corporate service solutions.",
      image: founderImg,
      social: {
        linkedin: "",
        email: ""
      }
    },
    {
      name: "Michael Chen",
      position: "Co-Founder & CTO",
      bio: "Michael brings technical expertise from his background in logistics and operations technology. He oversees Vednex's digital infrastructure, ensuring seamless service delivery and developing innovative solutions that keep us at the cutting edge of the industry.",
      image: cofounderImg,
      social: {
        linkedin: "",
        email: ""
      }
    },
    {
      name: "Priya Patel",
      position: "Managing Director",
      bio: "Priya's strategic leadership has been instrumental in Vednex's rapid growth across multiple markets. With extensive experience in corporate client relationships, she directs our operational excellence initiatives and builds lasting partnerships with enterprise clients.",
      image: mdImg,
      social: {
        linkedin: "",
        email: ""
      }
    }
  ];
  
  const handleService = () => {
    navigate("/services");
  };
  
  const navigateContact = () => {
    navigate("/contact");
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-8">
      {/* Hero Section with Image */}
      <div className={`relative bg-blue-600 text-white overflow-hidden transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Empowering Teams <br />
                <span className="text-yellow-300">Enhancing Workplaces</span>
              </h1>
              <p className="text-xl mb-8 max-w-lg">
              Welcome to Vednex Corporate Solutions — your dedicated partner in delivering top-tier facility management and corporate bar services designed to optimize your business environment and elevate your corporate events. With a focus on reliability, innovation, and customer-centric solutions, we help organizations across industries maintain operational excellence while creating memorable experiences.
              </p>
              <button className="bg-white text-blue-600 hover:bg-yellow-300 hover:text-blue-800 font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg transform hover:scale-105" onClick={handleService}>
                Our Services
              </button>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-30"></div>
                <img 
                  src={about} 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Company Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with the vision to bridge the gap between quality service and client satisfaction, Vednex Corporate Solutions has grown into a trusted name in the service industry. Our commitment to professionalism and continuous improvement drives us to deliver exceptional results tailored to the unique needs of each client.
            </p>
          </div>    
          
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden transition-all duration-1000 transform ${
                  animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } hover:shadow-xl`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 bg-blue-50 rounded-lg">
                      {card.icon}
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">{card.title}</h2>
                  </div>
                  <div className="h-1 w-16 bg-blue-500 rounded-full mb-6"></div>
                  <p className="text-gray-600 flex-grow">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Leadership Team Section - NEW with circular images */}
      <div className="py-20 bg-gradient-to-br from-blue-100 via-blue-800 to-blue-100 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">Our Visionary Leaders</h2>
            <div className="h-1 w-24 bg-yellow-300 mx-auto"></div>
            <p className="mt-6 text-xl max-w-3xl mx-auto text-blue-100">
              Meet the innovative minds driving Vednex's mission to transform corporate experiences.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {leadershipTeam.map((leader, index) => (
              <div
                key={index}
                className={`mb-20 last:mb-0 transition-all duration-1000 transform ${
                  animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
                  {/* Circular Image */}
                  <div className="mb-8 md:mb-0 md:w-1/3 flex justify-center">
                    <div className="relative">
                      <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white-300 shadow-xl transform transition-transform duration-500 hover:scale-105">
                        <img 
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-500 opacity-20"></div>
                      <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-blue-300 opacity-30"></div>
                      
                      {/* Social icons floating above the image */}
                      <div className="absolute top-0 right-0 bg-blue-300 rounded-full p-3 shadow-lg transform -translate-y-1/4 translate-x-1/4">
                        <Mail className="h-5 w-5 text-blue-800" />
                      </div>
                      <div className="absolute bottom-0 left-0 bg-blue-300 rounded-full p-3 shadow-lg transform translate-y-1/4 -translate-x-1/4">
                        <Linkedin className="h-5 w-5 text-blue-800" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 text-center md:text-left">
                    <div className={`bg-blue-800 bg-opacity-50 rounded-3xl p-8 shadow-xl border-l-4 ${index % 2 !== 0 ? 'border-r-4 border-l-0 md:mr-8' : 'md:ml-8'} border-blue-300`}>
                      <h3 className="text-3xl font-bold mb-1">{leader.name}</h3>
                      <p className="text-yellow-300 text-xl font-medium mb-4">{leader.position}</p>
                      <div className="h-1 w-16 bg-white rounded-full mb-6 mx-auto md:mx-0"></div>
                      <p className="text-lg leading-relaxed">{leader.bio}</p>
                      
                      <div className="mt-6 flex space-x-4 justify-center md:justify-start">
                        <a href={`mailto:${leader.social.email}`} className="bg-blue-700 hover:bg-blue-600 p-2 rounded text-white transition-colors duration-300 flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>Connect</span>
                        </a>
                        <a href={leader.social.linkedin} className="bg-blue-700 hover:bg-blue-600 p-2 rounded text-white transition-colors duration-300 flex items-center gap-2">
                          <Linkedin className="h-4 w-4" />
                          <span>Profile</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Section with Image */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`md:flex md:items-center md:space-x-12 transition-all duration-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={team} 
                  alt="Our team collaborating" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-30"></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Team Culture</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team comprises highly skilled professionals, industry experts, and passionate service providers who understand the nuances of facility management and event hospitality. We invest heavily in training, technology, and process optimization to ensure consistent quality, efficiency, and safety.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {teamValues.map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <p className="font-semibold text-gray-800">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 delay-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold mb-6">Ready to enhance your workplace experience?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the many organizations that trust us to support their teams with essential services.
            </p>
            <button className="bg-white text-blue-700 hover:bg-yellow-300 hover:text-blue-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105" onClick={navigateContact}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;