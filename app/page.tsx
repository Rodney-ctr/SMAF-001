// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3" 
            alt="Construction Site"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Dreams, Crafting Excellence
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            SMAF Construction delivers superior building solutions with unmatched expertise and commitment to quality. From concept to completion, we build with integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition duration-300">
              Get a Quote
            </Link>
            <Link href="/projects" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded transition duration-300">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '250+', label: 'Projects Completed' },
            { number: '120+', label: 'Happy Clients' },
            { number: '50+', label: 'Expert Team' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md">
              <p className="text-5xl font-bold text-blue-900 mb-2">{stat.number}</p>
              <p className="text-xl text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Residential Construction', 
                icon: '🏠',
                desc: 'Custom home building, renovations, and extensions designed to match your lifestyle.'
              },
              { 
                title: 'Commercial Construction', 
                icon: '🏢',
                desc: 'Office buildings, retail spaces, and commercial complexes built to maximize functionality.'
              },
              { 
                title: 'Renovation & Remodeling', 
                icon: '🔨',
                desc: 'Transform your existing space with our expert renovation services.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="/services" className="text-orange-500 font-semibold hover:underline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded transition duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of completed works
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gray-200 relative">
                  <Image 
                    src={`https://picsum.photos/600/400?random=${item}`}
                    alt={`Project ${item}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Project Title {item}</h3>
                  <p className="text-gray-600 mb-4">Brief description of the project and its key features.</p>
                  <Link href="/projects" className="text-orange-500 font-semibold hover:underline">
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition duration-300">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              What our clients say about our work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-blue-800 p-8 rounded-lg">
                <p className="italic mb-6">"SMAF Construction transformed our outdated office building into a modern, efficient workspace. Their attention to detail and commitment to the timeline was impressive."</p>
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Client Name</h4>
                    <p className="text-blue-200">Project Type</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}