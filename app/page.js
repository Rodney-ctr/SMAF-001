import React from 'react';
    export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Building Your Future, Today
        </h1>
        <p className="text-lg md:text-xl mb-8">
          SMAF Construction Ltd delivers trusted, high-quality construction services across Kenya.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-2">SMAF Construction Ltd</h2>
            <p className="text-sm">
              Excellence in structural engineering, design & commercial construction.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul className="text-sm space-y-1">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/projects" className="hover:text-white">Projects</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Contact</h2>
            <p className="text-sm">Nairobi, Kenya</p>
            <p className="text-sm">Email: info@smafconstruction.com</p>
            <p className="text-sm">Phone: +254 700 000 000</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} SMAF Construction Ltd. All rights reserved.
        </div>
      </footer>
    </>
  );


}
