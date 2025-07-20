"use client";
import { use } from "react";

// app/services/page.tsx

//export const metadata = {
  //title: "Our Services | Solid Tech Solutions",
  //description: "Explore the range of services offered by Solid Tech Solutions including web development, cybersecurity, and more.",
//};

export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      icon: "🏠",
      description: "Custom home building, renovations, and extensions designed to match your lifestyle and preferences with precision craftsmanship.",
      features: [
        "New home construction",
        "Home additions and extensions",
        "Custom home design",
        "Green building solutions",
        "Quality assurance programs"
      ]
    },
    {
      title: "Commercial Construction",
      icon: "🏢",
      description: "Office buildings, retail spaces, and commercial complexes built to maximize functionality, efficiency, and aesthetic appeal.",
      features: [
        "Office buildings",
        "Retail and shopping centers",
        "Restaurants and hospitality",
        "Healthcare facilities",
        "Educational institutions"
      ]
    },
    {
      title: "Renovation & Remodeling",
      icon: "🔨",
      description: "Transform your existing space with our expert renovation services that breathe new life into homes and commercial properties.",
      features: [
        "Kitchen and bathroom remodels",
        "Whole-house renovations",
        "Commercial space transformations",
        "Historic restorations",
        "Accessibility upgrades"
      ]
    },
    {
      title: "Project Management",
      icon: "📊",
      description: "Comprehensive project oversight from conception to completion, ensuring timelines, budgets, and quality standards are met.",
      features: [
        "Budget planning and control",
        "Schedule management",
        "Quality assurance",
        "Risk management",
        "Stakeholder communication"
      ]
    },
    {
      title: "Infrastructure Development",
      icon: "🛣️",
      description: "Roads, bridges, and public works projects built with engineering excellence and community impact in mind.",
      features: [
        "Road and highway construction",
        "Bridge engineering",
        "Water and sewage systems",
        "Public utilities",
        "Land development"
      ]
    },
    {
      title: "Consulting Services",
      icon: "📝",
      description: "Expert guidance on construction planning, feasibility studies, and regulatory compliance for your building projects.",
      features: [
        "Feasibility studies",
        "Cost estimation",
        "Permitting assistance",
        "Design consultation",
        "Sustainability assessments"
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Construction Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive solutions tailored to your building needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="text-5xl mb-6 text-orange-500">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Work Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we ensure successful project delivery from start to finish
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center">
            {[
              { step: 1, title: "Consultation", desc: "Understanding your vision and requirements" },
              { step: 2, title: "Planning", desc: "Design development and project blueprint" },
              { step: 3, title: "Estimation", desc: "Detailed cost analysis and budgeting" },
              { step: 4, title: "Execution", desc: "Construction with quality craftsmanship" },
              { step: 5, title: "Inspection", desc: "Rigorous quality control checks" },
              { step: 6, title: "Delivery", desc: "Project handover and aftercare" }
            ].map((process, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center text-xl font-bold mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition duration-300">
              Request a Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded transition duration-300">
              Call Now: +254 712 345 678
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}