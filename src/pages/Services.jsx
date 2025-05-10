import React, { useEffect } from 'react';
import { ChefHat, Car, Briefcase, UtensilsCrossed, Sparkles, Shirt } from 'lucide-react';
import { motion } from 'framer-motion';
function Services() {
  // Animation effect when component mounts
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, 300 * index);
    });
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <ChefHat size={48} />,
      title: "Corporate Catering Excellence",
      items: [
        "Tailored meal plans for corporate preferences",
        "On-site & off-site catering for all scales",
        "Certified kitchen staff & food safety standards",
        "Daily corporate meals, events, and special menus"
      ]
    },
    {
      icon: <UtensilsCrossed size={48} />,
      title: "Complete Food Management",
      items: [
        "Pantry management & cafeteria operations",
        "Quality-controlled ingredient sourcing",
        "Balanced, customizable menu planning",
        "FSSAI-compliant processes"
      ]
    },
    {
      icon: <Car size={48} />,
      title: "Employee Transportation Solutions",
      items: [
        "GPS-enabled, company-assigned vehicles",
        "Trained drivers & real-time tracking",
        "Route optimization for timely pickups/drop-offs",
        "Scalable fleet for different company sizes"
      ]
    },
    {
      icon: <Sparkles size={48} />,
      title: "Professional Cleaning & Housekeeping",
      items: [
        "Daily deep-cleaning routines",
        "Restroom sanitation & waste management",
        "Trained staff with eco-friendly products",
        "Disinfection services & floor care"
      ]
    },
    {
      icon: <Shirt size={48} />,
      title: "Commercial Laundry & Garment Care",
      items: [
        "Uniform and linen washing",
        "Industrial-grade cleaning equipment",
        "Pickup, washing, ironing & delivery",
        "Customized schedules for convenience"
      ]
    },
    {
      icon: <Briefcase size={48} />,
      title: "Complete Employee Support Solutions",
      items: [
        "Onsite Assistance: Coordinators and service desks for daily employee needs",
        "Custom Packages: Solutions tailored to your company's specific requirements",
        "Technology-Enabled Management: Easy tracking, booking, and reporting through digital tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section with Animation */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">OUR PREMIER SERVICES</h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            At Vednex, we offer a complete range of solutions to support corporate employees with their daily needs, 
            ensuring convenience, comfort, and efficiency.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
            key={index}
            whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="bg-white rounded-lg shadow-md p-6 transition-all duration-300"
          >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-16 opacity-0 animate-fade-in-delayed">
          <p className="text-lg font-medium text-gray-700 italic">
            We handle the essentials, so your team can focus on what matters most — achieving success.
          </p>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(3rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 1.5s ease-out 0.5s forwards;
        }
        
        .animate-in {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Services;