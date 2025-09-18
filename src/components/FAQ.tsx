"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "What services do you provide?",
      answer:
        "I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.",
    },
    {
      question: "How do I start working with you?",
      answer:
        "Simply book a free consultation call through our website, and we'll discuss your project requirements and how I can help bring your vision to life.",
    },
    {
      question: "What design tools do you use?",
      answer:
        "I primarily use Figma for UI/UX design, Adobe Creative Suite (Photoshop, Illustrator, InDesign) for brand identity and packaging design, and other industry-standard tools.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Project timelines vary depending on scope and complexity. Typically, brand identity projects take 2-3 weeks, while packaging design can take 3-4 weeks. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide revisions?",
      answer:
        "Yes, I include 2-3 rounds of revisions in all my packages to ensure the final design meets your expectations and requirements.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "I work with various industries including consumer goods, wellness, technology, food & beverage, and sustainability-focused companies.",
    },
    {
      question: "Do you offer development services?",
      answer:
        "While my primary focus is on design, I work with trusted development partners for web and app development projects when needed.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Pricing varies based on project scope and complexity. I offer both project-based and retainer options. Contact me for a custom quote based on your specific needs.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely! I can help redesign your existing website or brand identity to better align with your current goals and target audience.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const skillTags = ["Product Design", "Brand Identity Design", "Branding"];

  return (
    <section className="w-full py-20 px-8 bg-[#191919] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Header and Image */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Answers
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Find answers to common questions about my design process, services
              etc…
            </p>

            {/* Image placeholder */}
            <div className="w-full h-64 bg-gray-900 rounded-2xl overflow-hidden mb-8">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Design Image</span>
              </div>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {skillTags.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Book a Free Call
            </button>
          </div>

          {/* Right side - FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 bg-white/5 backdrop-blur rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition"
                >
                  <span className="font-medium text-white pr-4">
                    {item.question}
                  </span>
                  {openItems.includes(index) ? (
                    <FaMinus className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  ) : (
                    <FaPlus className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
