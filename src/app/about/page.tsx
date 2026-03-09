// app/about/page.jsx
import Link from 'next/link';

export default function About() {
  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center
      bg-gradient-to-r from-[#0f1a3b] via-pink-500 to-purple-500 overflow-hidden"
    >
      {/* SVG Background */}
      <img
        src="/bs.svg"
        alt="Background SVG"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl p-10 
                bg-white/10 border border-white/30 rounded-2xl
                transition-transform duration-500 hover:scale-105 hover:shadow-2xl text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-white transition-colors duration-500 hover:text-pink-400">
          About BA2A
        </h2>
        <p className="text-lg leading-relaxed text-gray-200 transition-colors duration-500 hover:text-white mb-6">
          BA2A is dedicated to delivering exceptional digital solutions tailored to your unique business needs.
          Our passionate team combines innovation and expertise to help you succeed online.
        </p>

        {/* Button to Features */}
        <Link
          href="#features"
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-400 to-[#0f1a3b] font-semibold shadow-md hover:opacity-90 transition"
        >
          View Features
        </Link>
      </div>
    </section>
  );
}
