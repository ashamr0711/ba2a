'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="relative bg-blue-900 dark:bg-gray-900 text-white shadow-md sticky top-0 z-50 transition-colors duration-300 overflow-hidden">
      
      {/* BS SVG Background */}
      <img
        src="/bs.svg"
        alt="Navbar Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-3xl font-extrabold tracking-wide">BA2A</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/features" className="hover:text-gray-300 transition cursor-pointer">Features</Link>
          <Link href="/pricing" className="hover:text-gray-300 transition">Pricing</Link>
          <Link href="/contacts" className="hover:text-gray-300 transition">Contacts</Link>

          {/* Sign In hover card */}
          <Link href="/signin" className="relative group">
            <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              Sign In
            </div>
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 dark:bg-gray-800 text-white flex flex-col space-y-4 p-4 font-semibold transition-colors relative z-10">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">About</Link>
          <Link href="/features" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 cursor-pointer">Features</Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Pricing</Link>
          <Link href="/contacts" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Contacts</Link>

          {/* Sign In hover card */}
          <Link
            href="/signin"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center"
          >
            Sign In
          </Link>

          {/* Dark mode toggle (mobile) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      )}
    </nav>
  );
}
