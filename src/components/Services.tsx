import React from "react";

const Services = () => {
  const services = [
    {
      title: "Brand Identity",
      description:
        "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.",
    },
    {
      title: "Package Design",
      description:
        "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.",
    },
    {
      title: "Brand Design",
      description:
        "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.",
    },
    {
      title: "Mockup Design",
      description:
        "Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters when showcasing your product's true potential.",
    },
  ];

  const skillTags = [
    "Product Design",
    "Brand Identity Design",
    "Branding",
    "Packaging Design",
    "Mockup Design",
  ];

  return (
    <section className="w-full py-20 px-8 bg-[#191919] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Services content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Services
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Helping businesses standout with brand identity packaging that
              captivates and converts effectively.
            </p>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {skillTags.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
                Book a Free Call
              </button>
              <button className="border border-white px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition font-medium">
                See Projects
              </button>
            </div>

            {/* Main Services List */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Service image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gray-900 rounded-2xl overflow-hidden">
                {/* Simulating product/bottle image from screenshot */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 relative flex items-center justify-center">
                  {/* Bottle silhouette */}
                  <div className="relative">
                    <div className="w-16 h-48 bg-gray-600 rounded-t-full rounded-b-lg mx-auto"></div>
                    <div className="w-12 h-8 bg-gray-500 rounded-t-lg mx-auto -mt-2"></div>
                    <div className="w-8 h-4 bg-gray-700 rounded-lg mx-auto -mt-1"></div>
                  </div>
                  {/* Background elements */}
                  <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gray-700 rounded-full opacity-30"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-8 h-16 bg-gray-700 rounded opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
