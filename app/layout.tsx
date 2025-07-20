import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SMAF Construction | Building Excellence",
  description: "Professional construction services for residential and commercial projects since 2010",
  keywords: "construction, building, renovation, contractors, architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
        suppressHydrationWarning={true}
      >
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <h1 className="ml-4 text-2xl font-bold text-blue-800 font-sans">
                SMAF CONSTRUCTION
              </h1>
            </Link>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {[
                  {name: 'Home', path: '/'},
                  {name: 'Services', path: '/services'},
                  {name: 'Projects', path: '/projects'},
                  {name: 'About', path: '/about'},
                  {name: 'Contact', path: '/contact'}
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <button className="md:hidden text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">SMAF Construction</h3>
                <p className="text-blue-200">
                  Building excellence through quality craftsmanship and innovative solutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <address className="not-italic text-blue-200">
                  <p>Nchiru, Tigania West</p>
                  <p>Meru, Kenya</p>
                  <p className="mt-2">Phone: +254 745745609</p>
                  <p>Email: info@smafconstruction.com</p>
                </address>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                <p className="text-blue-200">
                  Mon-Fri: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
              <p>&copy; {new Date().getFullYear()} SMAF Construction. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}