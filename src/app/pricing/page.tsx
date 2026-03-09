// app/pricing/page.jsx
export default function Pricing() {
  const plans = [
    {
      title: 'Basic',
      price: '$19/mo',
      features: ['Feature A', 'Feature B', 'Feature C'],
    },
    {
      title: 'Pro',
      price: '$49/mo',
      features: ['Everything in Basic', 'Feature D', 'Feature E'],
    },
    {
      title: 'Enterprise',
      price: 'Contact Us',
      features: ['Custom solutions', 'Dedicated support'],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-black via-[#0f1a3b] via-navy-900 to-purple-500">
      {/* Background SVG */}
      <img
        src="/bs.svg"
        alt="Background SVG"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-16 text-white">Pricing Plans</h2>

        <div className="grid gap-12 md:grid-cols-3">
          {plans.map(({ title, price, features }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 flex flex-col justify-between
                         hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">{title}</h3>
                <p className="text-4xl font-extrabold mb-8 text-pink-400">{price}</p>
                <ul className="space-y-3 text-gray-200 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="w-6 h-6 text-pink-400 mr-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-3 rounded-lg bg-pink-500 text-white font-semibold hover:bg-purple-500 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
