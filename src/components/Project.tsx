"use client";
import { motion } from "motion/react";
import React from "react";
import { SiTrueup } from "react-icons/si";

const Project = () => {
  const projects = [
    [
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
    ],
    [
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
    ],
    [
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
    ],
  ];

  return (
    <section className="w-full py-20 px-8 bg-[#191919] text-white relative overflow-hidden">
      {" "}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Projects Grid - 3x3 layout */}
        {projects.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
          >
            {row.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.3,
                }}
                key={index}
                className="group cursor-pointer"
              >
                {/* Project Card */}
                <div className="aspect-square bg-white/5 backdrop-blur rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 border border-white/10">
                  <div
                    className={`w-full h-full ${project.bgColor} relative flex items-center justify-center`}
                  >
                    {/* Placeholder content based on project type */}
                    <div className="text-gray-400 text-center">
                      {index === 0 && (
                        <div className="w-16 h-20 bg-gray-800 rounded border-2 border-white/10 flex items-center justify-center">
                          <div className="w-8 h-12 bg-gray-600 rounded"></div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
                      )}
                      {index === 2 && (
                        <div className="flex items-center">
                          <div className="w-8 h-12 bg-gray-600 rounded-l-full"></div>
                          <div className="w-4 h-8 bg-gray-700"></div>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="grid grid-cols-2 gap-2">
                          <div className="w-6 h-6 bg-gray-700 rounded"></div>
                          <div className="w-6 h-6 bg-gray-600 rounded"></div>
                          <div className="w-6 h-6 bg-gray-600 rounded"></div>
                          <div className="w-6 h-6 bg-gray-700 rounded"></div>
                        </div>
                      )}
                      {index === 4 && (
                        <div className="w-8 h-16 bg-gray-600 rounded-full"></div>
                      )}
                      {index === 5 && (
                        <div className="space-y-2">
                          <div className="w-16 h-2 bg-gray-700 rounded"></div>
                          <div className="w-12 h-2 bg-gray-600 rounded"></div>
                          <div className="w-14 h-2 bg-gray-700 rounded"></div>
                        </div>
                      )}
                      {index === 6 && (
                        <div className="flex space-x-2">
                          <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                          <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                          <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                        </div>
                      )}
                      {index === 7 && (
                        <div className="w-12 h-16 bg-gray-600 rounded-lg flex items-end">
                          <div className="w-full h-8 bg-gray-700 rounded-b-lg"></div>
                        </div>
                      )}
                      {index === 8 && (
                        <div className="w-12 h-12 bg-gray-600 rounded-full relative">
                          <div className="absolute top-2 right-2 w-4 h-4 bg-gray-400 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project link - minimalist */}
                <div className="mt-3 text-center">
                  <button className="text-gray-300 hover:text-white transition text-sm font-medium">
                    View Case Study →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Bottom action */}
        <div className="text-center">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            Book a Free Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
