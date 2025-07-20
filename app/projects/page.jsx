"use client";
// app/projects/page.tsx
import Image from "next/image";
import { useState } from "react";

//export const metadata = {
 // title: "Projects | Solid Tech Solutions",
 // description: "View some of the past and current projects developed by Solid Tech Solutions.",
//};
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "renovation", label: "Renovation" },
    { id: "public", label: "Public Works" }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Harborview Apartments",
      type: "residential",
      location: "Mombasa",
      description: "Modern luxury apartment complex with waterfront views",
      year: 2023
    },
    {
      id: 2,
      title: "TechPark Office Complex",
      type: "commercial",
      location: "Nairobi",
      description: "LEED-certified commercial office space development",
      year: 2022
    },
    {
      id: 3,
      title: "Cliffside Residence",
      type: "residential",
      location: "Malindi",
      description: "Contemporary luxury home with panoramic ocean views",
      year: 2023
    },
    {
      id: 4,
      title: "Prestige Auto Gallery",
      type: "commercial",
      location: "Nairobi",
      description: "High-end automotive showroom and service center",
      year: 2021
    },
    {
      id: 5,
      title: "Riverside Community Center",
      type: "public",
      location: "Kisumu",
      description: "Multi-purpose public facility with sustainable design",
      year: 2022
    },
    {
      id: 6,
      title: "Heritage Bank Restoration",
      type: "renovation",
      location: "Nakuru",
      description: "Historic building renovation preserving original features",
      year: 2020
    },
    {
      id: 7,
      title: "Central Hospital Expansion",
      type: "public",
      location: "Nairobi",
      description: "Healthcare facility expansion with modern amenities",
      year: 2023
    },
    {
      id: 8,
      title: "Mountain View Resort",
      type: "commercial",
      location: "Nanyuki",
      description: "Luxury eco-resort with sustainable architecture",
      year: 2021
    }
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Construction Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our portfolio of completed works across Kenya
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 relative">
                  <Image
                    src={`https://picsum.photos/600/400?random=${project.id}`}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text-blue-900">{project.title}</h2>
                    <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                  
                  <button className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 rounded transition duration-300">
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No projects found in this category</h3>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with SMAF Construction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-blue-700 bg-opacity-30 p-8 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">Client Name</h3>
                    <p className="text-blue-200">Project: Project Name</p>
                  </div>
                </div>
                
                <p className="italic mb-6">
                  "SMAF Construction exceeded our expectations on our office renovation. Their team was professional, 
                  attentive to detail, and completed the project ahead of schedule. The quality of craftsmanship is 
                  exceptional and we couldn't be happier with the results."
                </p>
                
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}