"use client";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { useState } from "react";
export default function Contactpage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact SMAF Construction</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch for inquiries, quotes, or to discuss your next project
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full text-blue-900 mr-6">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      Nchiru, Tigania West<br />
                      Meru, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full text-blue-900 mr-6">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone & Fax</h3>
                    <p className="text-gray-600">
                      Main: +254 712 345 678<br />
                      Office: +254 020 123 4567<br />
                      Fax: +254 020 123 4568
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full text-blue-900 mr-6">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-gray-600">
                      General: info@smafconstruction.com<br />
                      Support: support@smafconstruction.com<br />
                      Careers: careers@smafconstruction.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full text-blue-900 mr-6">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="bg-blue-100 text-blue-900 p-3 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                      <select 
                        id="subject" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a Subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="service">Service Inquiry</option>
                        <option value="project">Project Discussion</option>
                        <option value="career">Career Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a Service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="management">Project Management</option>
                      <option value="infrastructure">Infrastructure Development</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Location</h2>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
            <span className="text-gray-500">Interactive Map Here</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our construction services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What areas in Kenya do you serve?",
                answer: "We provide construction services throughout Kenya, with a focus on Meru County and surrounding regions. Our major projects have been in Nairobi, Mombasa, Kisumu, Nakuru, and Nanyuki."
              },
              {
                question: "How long does a typical construction project take?",
                answer: "Project timelines vary based on size and complexity. A standard residential home takes 6-9 months, while commercial projects can range from 12-24 months. We provide detailed timelines during project planning."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes, we offer complimentary initial consultations to discuss your project requirements, budget, and timeline. Contact us to schedule your free consultation."
              },
              {
                question: "What types of construction projects do you specialize in?",
                answer: "We specialize in both residential and commercial construction, including new builds, renovations, infrastructure projects, and sustainable construction."
              },
              {
                question: "How do you ensure quality control?",
                answer: "We implement rigorous quality control measures including regular site inspections, material testing, and adherence to Kenyan building codes and international standards."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full flex justify-between items-center p-6 text-left">
                  <h3 className="text-lg font-medium text-blue-900">{faq.question}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}