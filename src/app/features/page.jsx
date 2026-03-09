'use client';

export default function Features() {
  const features = [
    {
      title: "Fast & AI-Powered",
      description: "Turn your ideas into production-ready applications within minutes using BA2A’s intelligent automation.",
    },
    {
      title: "Modern Design",
      description: "Generate sleek, responsive layouts with Tailwind-based components that are ready for production.",
    },
    {
      title: "SaaS Starter Kit",
      description: "Accelerate your SaaS journey with authentication, RBAC, dashboards, and core modules included by default.",
    },
    {
      title: "Multi-Framework",
      description: "Generate applications in React, Next.js, RefineJS, Node.js, NestJS, and NuxtJS—pick the stack that works best for you.",
    },
    {
      title: "API & Docs",
      description: "REST endpoints generated instantly with auto-generated Swagger/OpenAPI documentation for seamless integration.",
    },
    {
      title: "Database Ready",
      description: "Automatic setup for MySQL, PostgreSQL, or MongoDB with relationships, migrations, and validations handled for you.",
    },
    {
      title: "One-Click Deployment",
      description: "Export clean codebases and deploy instantly to Vercel, Netlify, or Docker/Kubernetes on AWS, Azure, or GCP.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 overflow-hidden bg-gradient-to-br 
                 from-[#0f1a3b] via-purple-700 via-pink-500 to-black"
    >
      {/* BS SVG Background */}
      <img
        src="/bs.svg"
        alt="Background SVG"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          Main Features Of BA2A
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-left
                         text-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
