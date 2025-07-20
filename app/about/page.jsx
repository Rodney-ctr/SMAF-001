//"use client";

// ✅ This goes at the top (optional, only if using hooks)
// "use client";  

// ✅ Metadata export
export const metadata = {
  title: "About Us - Solid Tech Solutions",
  description: "Learn more about Solid Tech Solutions, our mission, and our team.",
  keywords: ["about", "solid tech", "kenya", "IT company", "tech team"],
};

import React from 'react';
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to the about page of our site.</p>
    </div>
  );
}