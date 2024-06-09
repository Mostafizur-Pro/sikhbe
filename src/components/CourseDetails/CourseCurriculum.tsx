import React from "react";

const CourseCurriculum = () => {
  return (
    <div className="pb-10 text-center">
    <div className="text-center mb-10">
      <h1 className="font-bold text-5xl">Curriculum Overview</h1>
    </div>
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto justify-center mx-10">
      {/* <!-- Level 1 --> */}
      <div className="card w-full bg-gray-900 mb-5 p-5 sm:p-6 lg:p-8">
        <div className="card-body items-center text-start">
          <h2 className="text-green-600 font-bold text-2xl mb-2">Level 1</h2>
          <p className="text-white">
            Start your journey by mastering the essentials: HTML, CSS, and Bootstrap.
          </p>
        </div>
      </div>
      {/* <!-- Level 2 --> */}
      <div className="card w-full bg-gray-900 mb-5 p-5 sm:p-6 lg:p-8">
        <div className="card-body items-center text-start">
          <h2 className="text-green-600 font-bold text-2xl mb-2">Level 2</h2>
          <p className="text-white">
            Advance to Tailwind CSS, DaisyUI, core JavaScript concepts, functions, and objects.
          </p>
        </div>
      </div>
      {/* <!-- Level 3 --> */}
      <div className="card w-full bg-gray-900 mb-5 p-5 sm:p-6 lg:p-8">
        <div className="card-body items-center text-start">
          <h2 className="text-green-600 font-bold text-2xl mb-2">Level 3</h2>
          <p className="text-white">
            Dive deeper into JavaScript with DOM manipulation, API integration, ES6 features, debugging, and developer tools.
          </p>
        </div>
      </div>
      {/* <!-- Level 4 --> */}
      <div className="card w-full bg-gray-900 mb-5 p-5 sm:p-6 lg:p-8">
        <div className="card-body items-center text-start">
          <h2 className="text-green-600 font-bold text-2xl mb-2">Level 4</h2>
          <p className="text-white">
            Learn React, including React Router, hooks, context API, Tanstack query, Axios, payment integration, and data visualization with Recharts.
          </p>
        </div>
      </div>
      {/* <!-- Level 5 --> */}
      <div className="card w-full bg-gray-900 mb-5 p-5 sm:p-6 lg:p-8">
        <div className="card-body items-center text-start">
          <h2 className="text-green-600 font-bold text-2xl mb-2">Level 5</h2>
          <p className="text-white">
            Discover backend technologies such as Firebase, Node.js, Express, and MongoDB.
          </p>
        </div>
      </div>
      {/* <!-- Level 6 --> */}
      <div className="card w-full bg-gray-900 mb-5 p-5 sm:p-6 lg:p-8">
        <div className="card-body items-center text-start">
          <h2 className="text-green-600 font-bold text-2xl mb-2">Level 6</h2>
          <p className="text-white">
            [Advanced] Delve deeper into backend development with Firebase, Node.js, Express, and MongoDB. Learn to build secure APIs using JWT tokens.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default CourseCurriculum;
