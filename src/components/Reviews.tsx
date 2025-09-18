import React from "react";
import { FaStar } from "react-icons/fa6";

const Reviews = () => {
  const reviews = [
    {
      name: "Richards Johnson",
      role: "Creative Director & Lead Designer",
      review:
        "Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!",
      rating: 5.0,
      avatar: "RJ",
    },
    {
      name: "June Lee",
      role: "CEO of GreenRoots",
      review:
        "Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.",
      rating: 5.0,
      avatar: "JL",
    },
    {
      name: "Jona Carter",
      role: "Founder of EcoLux",
      review:
        "Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.",
      rating: 5.0,
      avatar: "JC",
    },
  ];

  const stats = [
    {
      number: "180+",
      label: "design projects completed.",
    },
    {
      number: "96%",
      label: "Client satisfaction rate.",
    },
    {
      number: "15+",
      label: "Years of experience",
    },
  ];

  return (
    <section className="w-full py-20 px-8 bg-[#191919] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Client Reviews
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Real feedback from clients who trusted my design expertise to
            elevate their brands successfully.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Book a Free Call
            </button>
            <button className="border border-white px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition font-medium">
              See Services
            </button>
          </div>
        </div>

        {/* Client Image Placeholder */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-lg h-64 bg-gray-800 rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-4"></div>
                <span className="text-gray-400 text-lg">Client Photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-xs">{review.role}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {review.review}
              </p>

              <div className="flex items-center">
                <span className="font-bold text-white mr-2 text-sm">
                  {review.rating}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
