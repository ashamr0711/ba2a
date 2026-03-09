'use client';

export default function Signin() {
  return (
    <section
      className="min-h-screen flex items-center justify-center p-6 bg-gray-50 relative"
      style={{
        backgroundImage: "url('/bs.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl w-full rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">
        
        {/* Left: About BA2A */}
        <AboutSection />

        {/* Right: Sign-In / Sign-Up Form */}
        <SignUpSection />
      </div>
    </section>
  );
}

// Left Section Component with hover effect
function AboutSection() {
  return (
    <div className="relative flex flex-col justify-center p-10 md:p-16 text-white space-y-6 bg-blue-900 rounded-l-xl opacity-80 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-blue-900/70 -z-10 rounded-l-xl"></div>

      {/* Layout container */}
      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl font-bold">About BA2A</h2>
        <p className="text-lg">
          BA2A helps you accelerate your development process using AI-powered tools, modern templates, and SaaS starter kits.
        </p>
        <p className="text-lg">
          Generate responsive layouts, APIs, and deploy your applications quickly with our multi-framework support.
        </p>

        {/* Call-to-action */}
        <div>
          <button className="mt-4 w-40 py-2 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

// Right Section Component with hover, colored background, and reduced opacity border
function SignUpSection() {
  return (
    <div className="relative flex flex-col justify-center p-10 md:p-16 space-y-6 bg-navy-600 text-white rounded-r-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-white/20 opacity-90">
      {/* Optional overlay for subtle gradient */}
      <div className="absolute inset-0 bg-blue-800/30 -z-10 rounded-r-xl"></div>

      <h1 className="text-4xl font-bold mb-4">Welcome to BA2A</h1>
      <p className="mb-6">
        Start your journey with BA2A and build amazing applications quickly.
      </p>

      {/* Social Sign-In Buttons */}
      <button className="w-full py-3 border border-white rounded-md flex items-center justify-center space-x-2 hover:bg-white hover:text-blue-700 transition">
        <span className="font-medium">Sign in with Google</span>
      </button>
      <button className="w-full py-3 border border-white rounded-md flex items-center justify-center space-x-2 hover:bg-white hover:text-blue-700 transition">
        <span className="font-medium">Sign in with LinkedIn</span>
      </button>

      {/* Divider */}
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-white/50"></div>
        <span className="px-2 text-white/70 text-sm">OR</span>
        <div className="flex-grow h-px bg-white/50"></div>
      </div>

      {/* Email Sign-In */}
      <button className="w-full py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition">
        Sign in with Email
      </button>

      <p className="text-white/70 text-xs mt-4">
        By signing in, you agree to our <span className="underline">Terms and Conditions</span> and <span className="underline">Privacy Policy</span>.
      </p>
    </div>
  );
}
