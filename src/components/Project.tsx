import React from "react";
import WaveBackground from "./WaveBackground";

const Project = () => {
  const projects = [
    {
      title: "Notebook Design",
      category: "Stationery",
      bgColor: "bg-gray-100",
    },
    {
      title: "Portrait Study",
      category: "Photography",
      bgColor: "bg-gray-200",
    },
    {
      title: "Hand Gesture",
      category: "Art Direction",
      bgColor: "bg-gray-150",
    },
    {
      title: "Workspace Setup",
      category: "Lifestyle",
      bgColor: "bg-gray-300",
    },
    {
      title: "Bottle Design",
      category: "Product Design",
      bgColor: "bg-gray-100",
    },
    {
      title: "Interior Space",
      category: "Architecture",
      bgColor: "bg-gray-250",
    },
    {
      title: "Team Meeting",
      category: "Corporate",
      bgColor: "bg-gray-200",
    },
    {
      title: "Hand Study",
      category: "Photography",
      bgColor: "bg-gray-150",
    },
    {
      title: "Abstract Form",
      category: "Art",
      bgColor: "bg-gray-300",
    },
  ];

  return (
    <section className="w-full py-20 px-8 bg-white relative overflow-hidden">
      {/* Wave Background */}
      <WaveBackground opacity={0.1} variant="light" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Projects Grid - 3x3 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Project Card */}
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                <div
                  className={`w-full h-full ${project.bgColor} relative flex items-center justify-center`}
                >
                  {/* Placeholder content based on project type */}
                  <div className="text-gray-500 text-center">
                    {index === 0 && (
                      <div className="w-16 h-20 bg-white rounded border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-8 h-12 bg-gray-300 rounded"></div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
                    )}
                    {index === 2 && (
                      <div className="flex items-center">
                        <div className="w-8 h-12 bg-gray-400 rounded-l-full"></div>
                        <div className="w-4 h-8 bg-gray-500"></div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="grid grid-cols-2 gap-2">
                        <div className="w-6 h-6 bg-gray-400 rounded"></div>
                        <div className="w-6 h-6 bg-gray-500 rounded"></div>
                        <div className="w-6 h-6 bg-gray-500 rounded"></div>
                        <div className="w-6 h-6 bg-gray-400 rounded"></div>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="w-8 h-16 bg-gray-600 rounded-full"></div>
                    )}
                    {index === 5 && (
                      <div className="space-y-2">
                        <div className="w-16 h-2 bg-gray-400 rounded"></div>
                        <div className="w-12 h-2 bg-gray-500 rounded"></div>
                        <div className="w-14 h-2 bg-gray-400 rounded"></div>
                      </div>
                    )}
                    {index === 6 && (
                      <div className="flex space-x-2">
                        <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                      </div>
                    )}
                    {index === 7 && (
                      <div className="w-12 h-16 bg-gray-500 rounded-lg flex items-end">
                        <div className="w-full h-8 bg-gray-600 rounded-b-lg"></div>
                      </div>
                    )}
                    {index === 8 && (
                      <div className="w-12 h-12 bg-gray-500 rounded-full relative">
                        <div className="absolute top-2 right-2 w-4 h-4 bg-gray-300 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project link - minimalist */}
              <div className="mt-3 text-center">
                <button className="text-gray-600 hover:text-black transition text-sm font-medium">
                  View Casestudy →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom action */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            Book a Free Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
