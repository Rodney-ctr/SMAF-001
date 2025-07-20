"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 shadow">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Solid Tech</div>
        <ul className="flex gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}