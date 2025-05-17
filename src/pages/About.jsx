import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Briefcase, Target, Heart } from 'lucide-react';
import about from '../assets/AboutUs.jpg';
import team from '../assets/Team.jpg';
import { useNavigate } from 'react-router-dom';

function About() {
  const [animate, setAnimate] = useState(false);
  const navigate=useNavigate();
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
  const handleService=()=>{
    navigate("/services")
  }
  const navigateContact=()=>{
    navigate("/contact")
  }
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

Our team comprises highly skilled professionals, industry experts, and passionate service providers who understand the nuances of facility management and event hospitality. We invest heavily in training, technology, and process optimization to ensure consistent quality, efficiency, and safety.
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