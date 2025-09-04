import React from "react";
import WaveBackground from "./WaveBackground";

const Meet = () => {
  const skills = [
    "Product Design",
    "Brand Identity Design",
    "UX Design",
    "Branding",
    "Packaging Design",
    "Figma",
    "Photoshop",
  ];

  const experience = [
    {
      role: "Freelance",
      company: "GreenLeaf Co",
      period: "Currently",
      type: "Brand Designer",
    },
    {
      role: "Brand Designer",
      company: "UrbanFit Studio",
      period: "2023-24",
      type: "Brand Designer",
    },
    {
      role: "Package Designer",
      company: "GreenK Studio",
      period: "2020-22",
      type: "Package Designer",
    },
  ];

  return (
    <section className="w-full py-20 px-8 bg-[#191919] text-white relative overflow-hidden">
      {/* Wave Background */}
      {/* <WaveBackground opacity={0.15} variant="dark" /> */}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Meet Meily
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm Meily, a passionate Brand Identity & Package Designer based in
              tokyo. I specialize in crafting bold visual identities and
              packaging that captivate and inspire, blending creativity with
              strategy to elevate brands.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-white">{exp.type}</h4>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gray-700 rounded-2xl overflow-hidden">
                {/* Placeholder for profile image - simulating the reference */}
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center relative">
                  {/* Simple portrait silhouette */}
                  <div className="w-24 h-24 bg-gray-500 rounded-full mb-8"></div>
                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-40 bg-gray-600 rounded-t-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional project grid at bottom */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-600 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
