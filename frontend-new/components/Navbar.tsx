"use client"; // required for using events in Next.js App Router
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-indigo-600">Naina Kumari</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-indigo-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button (for small screens) */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}
