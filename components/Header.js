'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Auto-close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">
          <Link href="/">SMAF Construction</Link>
        </h1>

        <nav className="relative space-x-4 text-sm sm:text-base flex items-center">
          <Link href="/" className="hover:text-blue-600">Home</Link>

          {/* Dropdown Trigger */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-blue-600 focus:outline-none"
            >
              Company ▾
            </button>

            {/* Dropdown Menu with Animation */}
            <div
              className={`absolute right-0 mt-2 w-52 bg-white border rounded shadow-md z-10 transition-all duration-200 ease-in-out transform ${
                open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
              }`}
            >
              <ul className="py-2 text-left">
                <li>
                  <Link
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    🛠️ Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    🏗️ Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    👷 Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    📄 Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}