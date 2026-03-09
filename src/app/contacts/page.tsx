'use client';

export default function Contacts() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-purple-900 to-blue-900 overflow-hidden">
      {/* Background SVG */}
      <img
        src="/bs.svg"
        alt="Background SVG"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Info Section */}
        <div className="bg-blue-50/20 backdrop-blur-md p-10 md:p-16 rounded-xl flex flex-col justify-center space-y-8
                        border-2 border-gray-50/10 transition-transform duration-300 hover:scale-101 hover:shadow-lg">
          <h1 className="text-base md:text-lg font-semibold text-white uppercase">Contact Us</h1>
          <h1 className="text-5xl md:text-6xl font-bold text-navy-900 leading-tight">
            Let's talk about your problem.  
          </h1>

          <div className="space-y-6 mt-8 text-lg md:text-xl">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              <div>
                <p className="font-semibold text-black">Our Location</p>
                <p className="text-white">Tamil Nadu, India</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              <div>
                <p className="font-semibold text-black">How Can We Help?</p>
                <p className="text-white">info@yourdomain.com</p>
                <p className="text-white">contact@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white/20 backdrop-blur-md p-10 md:p-16 rounded-xl flex flex-col justify-center
                        border-2 border-gray-50/10 transition-transform duration-300 hover:scale-101 hover:shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Send a Message</h2>
          <form className="space-y-4 text-lg md:text-xl">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              required
              className="w-full px-4 py-3 border border-gray-400/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="w-full px-4 py-3 border border-gray-400/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              required
              className="w-full px-4 py-3 border border-gray-400/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message*"
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-400/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-800 text-white font-semibold rounded-md transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
