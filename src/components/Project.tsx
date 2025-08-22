import React from "react";

const Project = () => {
  return (
    <section className="w-full py-24 px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-[-100px] bottom-[-60px] w-[380px] h-[380px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-60 z-0" />
      <div className="absolute left-[40px] top-[30px] w-[100px] h-[100px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-40 z-0" />
      <div className="absolute right-[200px] top-[60px] w-[60px] h-[60px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-30 z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">
                Featured Project
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium text-sm">
                  Food festival
                </span>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              #VegFest
              <span className="block text-2xl sm:text-3xl text-gray-600 font-normal mt-2">
                Brand Refresh
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              The largest and most popular vegetarian food festival in the world
              was looking to refresh its brand to reflects its hugely expanded
              and diverse audience.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
                Branding
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
                Visual Identity
              </span>
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
                Marketing
              </span>
            </div>

            <div className="pt-6">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl">
                View Case Study
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Mockup content */}
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">#VegFest</div>
                  <div className="text-xl opacity-90">2024</div>
                </div>

                {/* Decorative elements in mockup */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
              </div>

              {/* Project stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">25%</div>
                  <div className="text-sm text-gray-500">Engagement ↑</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">150K</div>
                  <div className="text-sm text-gray-500">Attendees</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.8★</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-green-500 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
