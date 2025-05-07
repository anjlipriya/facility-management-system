import React, { useState, useEffect } from 'react';
import { Building2, Coffee, Car, Users, Star, MessageCircle, Clock, Settings, Heart, Check } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [activeTab, setActiveTab] = useState('form');
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is our mission?',
      answer: 'Our mission is to simplify corporate life by providing solutions that improve workplace experiences.'
    },
    {
      question: 'How can I get in touch?',
      answer: 'You can contact us via phone or email. Our contact details are provided above.'
    },
    {
      question: 'Where are our offices located?',
      answer: 'We have offices in Gaur city Gautam Buddha Nagar. For more details, check the office locations tab.'
    },
    {
      question: 'Do you offer remote services?',
      answer: 'Yes, we offer remote consultation and services for businesses worldwide.'
    },
  ];
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    setAnimateIn(true);
    
    // Load EmailJS SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    script.onload = () => {
      // Initialize EmailJS with your User ID
      // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
      window.emailjs.init('YOUR_USER_ID');
    };
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (templateParams) => {
    try {
      // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
      const response = await window.emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
  
    try {
      // Commented out email sending for now
      /*
      const templateParams = {
        to_email: 'abc@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };
  
      await sendEmail(templateParams);
      console.log('Form submitted:', formData);
      */
  
      // Show toast message instead
      toast.success("Thank you for contacting us.. We'll get back to you soon !!");
  
      setIsSubmitting(false);
      setIsSubmitted(true);
  
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Error in form submission:', error);
      setIsSubmitting(false);
      setSubmitError('Something went wrong. Please try again later.');
    }
  };
  

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4">

      <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">Get in Touch</h1>
          <div className="h-1 w-24 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="text-black-200 mt-6 max-w-2xl mx-auto">
            We're here to make corporate life easier — and it all starts with a conversation.
            Let's create a better workplace experience together!
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl">
          {/* Tabs */}
          <div className="flex border-b border-blue-800">
            <button
              className={`py-4 px-8 font-medium transition-colors duration-300 ${activeTab === 'form' ? 'text-white bg-blue-600' : ' text-white-200 hover:bg-blue-800 hover:bg-opacity-30'}`}
              onClick={() => handleTabChange('form')}
            >
              Contact Form
            </button>
            <button
              className={`py-4 px-8 font-medium transition-colors duration-300 ${activeTab === 'info' ? 'text-white bg-blue-600' : ' text-white-200 hover:bg-blue-800 hover:bg-opacity-30'}`}
              onClick={() => handleTabChange('info')}
            >
              Office Locations
            </button>

          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Form Tab */}
            {activeTab === 'form' && (
              <div className="md:flex gap-8">
                {/* Contact Info */}
                <div className="md:w-2/5 mb-8 md:mb-0">
                  <div className="bg-blue-900 bg-opacity-40 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center text-grey-100">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-black">Phone</p>
                          <p className="text-sm opacity-80">+91-8210816159</p>
                        </div>
                      </div>

                      <div className="flex items-center text-grey-100">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium  text-black">Email</p>
                          <p className="text-sm opacity-80">info@vednex.com</p>
                        </div>
                      </div>

                      <div className="flex items-center text-grey-100">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium  text-black">Office</p>
                          <p className="text-sm opacity-80"> 644, 6th Floor Gaur City Centre <br/>Sector 4, Bisrakh</p>
                          <p className="text-sm opacity-80">Gautam Buddha Nagar <br/>201306, Uttar Pradesh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  {/* Social Media */}
                  <div className="bg-blue-900 bg-opacity-40 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="md:w-3/5">
                  {isSubmitted ? (
                    <div className="bg-green-600 bg-opacity-20 border border-green-500 text-green-100 p-6 rounded-xl text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {submitError && (
                        <div className="bg-red-600 bg-opacity-20 border border-red-500 text-red-100 p-4 rounded-xl text-center mb-4">
                          <p>{submitError}</p>
                        </div>
                      )}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="peer w-full bg-white bg-opacity-20 border-2 border-blue-300 border-opacity-40 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-blue-500 text-black placeholder-transparent"
                            placeholder="Name"
                            required
                          />
                          <label
                            htmlFor="name"
                            className="absolute top-2 left-4 text-xs  text-white-200 transition-all peer-placeholder-shown:text-base peer-placeholder-shown: text-white-300 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus: text-white-200"
                          >
                            Name
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="peer w-full bg-white bg-opacity-20 border-2 border-blue-300 border-opacity-40 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-blue-500 text-black placeholder-transparent"
                            placeholder="Email"
                            required
                          />
                          <label
                            htmlFor="email"
                            className="absolute top-2 left-4 text-xs  text-white-200 transition-all peer-placeholder-shown:text-base peer-placeholder-shown: text-white-300 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus: text-white-200"
                          >
                            Email
                          </label>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="peer w-full bg-white bg-opacity-20 border-2 border-blue-300 border-opacity-40 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-blue-500 text-black placeholder-transparent"
                            placeholder="Phone"
                          />
                          <label
                            htmlFor="phone"
                            className="absolute top-2 left-4 text-xs  text-white-200 transition-all peer-placeholder-shown:text-base peer-placeholder-shown: text-white-300 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus: text-white-200"
                          >
                            Phone (optional)
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="peer w-full bg-white bg-opacity-20 border-2 border-blue-300 border-opacity-40 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-blue-500 text-black placeholder-transparent"
                            placeholder="Subject"
                          />
                          <label
                            htmlFor="subject"
                            className="absolute top-2 left-4 text-xs  text-white-200 transition-all peer-placeholder-shown:text-base peer-placeholder-shown: text-white-300 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus: text-white-200"
                          >
                            Subject
                          </label>
                        </div>
                      </div>

                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="peer w-full bg-white bg-opacity-20 border-2 border-blue-300 border-opacity-40 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:border-blue-500 text-black placeholder-transparent resize-none"
                          placeholder="Message"
                          required
                        ></textarea>
                        <label
                          htmlFor="message"
                          className="absolute top-2 left-4 text-xs  text-white-200 transition-all peer-placeholder-shown:text-base peer-placeholder-shown: text-white-300 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus: text-white-200"
                        >
                          Message
                        </label>
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-800 disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </div>
                          ) : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}

            {/* Office Locations Tab */}
            {activeTab === 'info' && (
              <div className="text-white">
                {/* Office Location Section */}
                <div className="bg-blue-900 bg-opacity-40 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 mb-6">
                  <div className="flex justify-center items-center p-6">
                    <Building2 size={80} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-center">644, 6th Floor, Gaur City Centre, Sector 4, Bisrakh</h3>
                    <p className="text-white-200 mb-4 text-center">
                     Gautam Buddha Nagar, 201306, Uttar Pradesh
                    </p>
                    <div className="flex items-center justify-center text-white-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+91-8210816159</span>
                    </div>
                  </div>
                </div>


                {/* Business Hours Section */}
                <div className="mt-10 p-6 bg-blue-900 bg-opacity-40 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="grid md:grid-cols-1 gap-4">
                    <table className="w-full text-white-200">
                      <tbody>
                        <tr className="border-b border-blue-800">
                          <td className="py-2 font-medium">Monday - Saturday</td>
                          <td className="py-2">9:00 AM - 7:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Sunday</td>
                          <td className="py-2">Closed</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* <div>
                      <p className="text-white-200 mb-4">Need urgent assistance outside business hours?</p>
                      <a href="#" className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                        Emergency Support
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            )}



          </div>
        </div>

        

        <div className="p-8 bg-blue-900 bg-opacity-40 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-4 px-6 bg-blue-800 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  {faq.question}
                </button>
                {activeIndex === index && (
                  <div className="p-6  text-white-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;