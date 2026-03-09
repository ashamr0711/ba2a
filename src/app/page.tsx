'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center 
      bg-gradient-to-br from-purple-600 via-pink-500 to-purple-900 overflow-hidden
      bg-[url('/bs.svg')] bg-cover bg-center"
    >
      {/* Background Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Floating Decorative Circles */}
      <div className="absolute top-10 left-16 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-10 right-16 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30 animate-float-slow"></div>

      {/* Glassmorphic Card with Hover Effect */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl w-[90%] max-w-4xl p-12 text-center text-white
                      transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        
        {/* Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          AI-Powered Code Generator
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Instantly generate production-ready frontend, backend, database, and APIs—
          designed for modern development teams.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            href="/signin"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 font-semibold shadow-md hover:opacity-90 transition"
          >
            Try BA2A
          </Link>
          <Link
            href="#"
            className="px-8 py-3 rounded-lg border border-white/50 font-semibold hover:bg-white hover:text-purple-700 transition"
          >
            Watch Demo
          </Link>
        </div>
      </div>
    </main>
  );
}
