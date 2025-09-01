import React from "react";
import WaveBackground from "./WaveBackground";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Define Your Vision",
      description:
        "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.",
    },
    {
      number: "2",
      title: "Submit Your Request",
      description:
        "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.",
    },
    {
      number: "3",
      title: "Project Delivered",
      description:
        "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.",
    },
  ];

  return (
    <section className="w-full py-20 px-8 bg-black text-white relative overflow-hidden">
      {/* Wave Background */}
      <WaveBackground opacity={0.15} variant="dark" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Large process image */}
          <div className="relative">
            <div className="w-full h-[600px] bg-gray-800 rounded-2xl overflow-hidden">
              {/* Simulating hands/workspace image from screenshot */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 relative flex items-center justify-center">
                {/* Abstract representation of hands working */}
                <div className="absolute bottom-1/4 left-1/4">
                  <div className="w-24 h-16 bg-gray-600 rounded-full transform rotate-12"></div>
                </div>
                <div className="absolute bottom-1/3 right-1/3">
                  <div className="w-20 h-12 bg-gray-500 rounded-full transform -rotate-6"></div>
                </div>
                {/* Paper/workspace elements */}
                <div className="absolute top-1/3 left-1/3 w-32 h-40 bg-gray-200 rounded-lg opacity-20"></div>
                <div className="absolute center w-8 h-8 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right side - Process content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Process
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              crafting bold visuals that inspire and elevate brands with thought
              process.
            </p>

            {/* Process Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-lg font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                Book a Free Call
              </button>
              <button className="border border-white px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition font-medium">
                See Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
