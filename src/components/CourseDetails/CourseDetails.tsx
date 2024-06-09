import React from "react";

const CourseDetails = () => {
  return (
    <div>
      <div className="text-center py-10">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-5 text-primary">
          What You'll Gain From This Course?
        </h1>
        <div className="my-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-auto max-w-7xl px-5">
          <p className="btn bg-[#E44D26] font-bold text-lg border-none text-white rounded-md hover:bg-[#a93315] hover:scale-105 transition-transform duration-300 ease-in-out">
            HTML
          </p>
          <p className="btn bg-[#2965f1] font-bold text-lg border-none text-white rounded-md hover:bg-[#264de4] hover:scale-105 transition-transform duration-300 ease-in-out">
            CSS
          </p>
          <p className="btn bg-[#563d7c] font-bold text-lg border-none text-white rounded-md hover:bg-[#59287a] hover:scale-105 transition-transform duration-300 ease-in-out">
            Bootstrap
          </p>
          <p className="btn bg-[#f0db4f] font-bold text-lg border-none text-black rounded-md hover:bg-[#ecdc44] hover:scale-105 transition-transform duration-300 ease-in-out">
            JavaScript
          </p>
          <p className="btn bg-[#61dafb] font-bold text-lg border-none text-black rounded-md hover:bg-[#21a1f1] hover:scale-105 transition-transform duration-300 ease-in-out">
            React
          </p>
          <p className="btn bg-[#FFA000] font-bold text-lg border-none text-black rounded-md hover:bg-[#FFB74D] hover:scale-105 transition-transform duration-300 ease-in-out">
            Firebase
          </p>
          <p className="btn bg-[#68a063] font-bold text-lg border-none text-white rounded-md hover:bg-[#3c873a] hover:scale-105 transition-transform duration-300 ease-in-out">
            NodeJS
          </p>
          <p className="btn bg-[#68a063] font-bold text-lg border-none text-white rounded-md hover:bg-[#3c873a] hover:scale-105 transition-transform duration-300 ease-in-out">
            ExpressJS
          </p>
          <p className="btn bg-[#4DB33D] font-bold text-lg border-none text-white rounded-md hover:bg-[#3FA037] hover:scale-105 transition-transform duration-300 ease-in-out">
            MongoDB
          </p>
          <p className="btn bg-[#007acc] font-bold text-lg border-none text-white rounded-md hover:bg-[#2e9dd0] hover:scale-105 transition-transform duration-300 ease-in-out">
            TypeScript
          </p>
          <p className="btn bg-[#ae977d] font-bold text-lg border-none text-white rounded-md hover:bg-[#a58b6f] hover:scale-105 transition-transform duration-300 ease-in-out">
            Mongoose
          </p>
        </div>
      </div>

      <div className="flex justify-center m-10 pb-40">
        <div className="relative inline-block w-auto col-span-1">
          <div className="">
            <img
              className="object-cover w-full h-full"
              decoding="async"
              loading="lazy"
              src="https://bonx-react.pages.dev/static/40259a30cb4b2bf6d1b9877053fa1183/0a8d7/gaming-bg1.webp"
              alt="Background"
            />
          </div>

          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className="relative w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 inline-block cursor-pointer"
              role="button"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-100 opacity-50"></span>
              <img
                className="relative w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28"
                decoding="async"
                loading="lazy"
                src="https://bonx-react.pages.dev/static/c1a7a32d0b562b2ea62f64765a3e8213/1db2c/play-btn.webp"
                alt="Play button"
              />
            </span>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10">
            <div className="relative w-80 max-w-full mx-auto">
              <img
                className="object-cover w-full h-full"
                decoding="async"
                loading="lazy"
                src="https://bonx-react.pages.dev/static/d10045891c4b4a87e886c94db720fede/48f4c/text-mini-shape.webp"
                alt="Text background"
              />
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase">
                Watch Video
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
