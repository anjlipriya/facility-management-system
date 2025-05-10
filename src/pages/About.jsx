import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

 function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    {
      title: "Our Mission",
      content: "We specialize in making corporate life smoother, easier, and more comfortable. We provide a range of essential services — including food delivery, cab transportation, and other employee-focused solutions — designed specifically for the needs of today's busy workplaces."
    },
    {
      title: "Our Approach",
      content: "We understand that when employees are taken care of, they perform their best. That's why we partner with leading organizations to offer on-time meals, safe and reliable rides, and personalized support services that help teams stay energized, productive, and focused."
    },
    {
      title: "Our Commitment",
      content: "With a commitment to quality, efficiency, and customer satisfaction, our goal is simple: to take care of the everyday essentials, so your team can take care of what matters most."
    },
    {
      title: "Our Promise",
      content: "Whether you're a growing startup or an established enterprise, Vednex is here to support your employees — every step of the way. Experience the difference of truly employee-centric services."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4">
      <div className={`text-center mb-12 transition-all duration-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our focus is to create intuitive solutions with a focus on simplicity and elegance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-1000 transform ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="h-2 bg-blue-500 rounded-full mb-4 transform transition-all duration-500 hover:scale-x-110 origin-left"></div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{card.title}</h2>
              <p className="text-gray-600 flex-grow">{card.content}</p>
              <div className="mt-6 flex items-center text-blue-500 font-medium group cursor-pointer">
                {/* <span>Learn more</span> */}
                {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-16 text-center transition-all duration-1000 delay-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
export default About;





