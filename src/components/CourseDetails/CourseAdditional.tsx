import React from "react";

const CourseAdditional = () => {
  return (
    <div className="pb-10 text-center my-10">
      <div className="text-center mb-10">
        <h1 className="font-bold text-4xl md:text-5xl  mb-10">
          Additional Features Of This Course
        </h1>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-auto justify-center px-5 md:px-10 lg:px-20">
        {/* Card 1 */}
        <div className="card w-full border-2 border-purple-600 shadow-xl">
          <div className="card-body">
            <h2 className="text-white font-bold text-2xl">
              Portfolio Review and Feedback
            </h2>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card w-full border-2 border-purple-600 shadow-xl">
          <div className="card-body">
            <h2 className="text-white font-bold text-2xl">
              Lifetime Access to Course Material
            </h2>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card w-full border-2 border-purple-600 shadow-xl">
          <div className="card-body">
            <h2 className="text-white font-bold text-2xl">
              Monthly Q&A Sessions with Instructors
            </h2>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card w-full border-2 border-purple-600 shadow-xl">
          <div className="card-body">
            <h2 className="text-white font-bold text-2xl">
              Career Development Workshops
            </h2>
          </div>
        </div>
        {/* Card 5 */}
        <div className="card w-full border-2 border-purple-600 shadow-xl">
          <div className="card-body">
            <h2 className="text-white font-bold text-2xl">
              Interview Preparation Session
            </h2>
          </div>
        </div>
        {/* Card 6 */}
        <div className="card w-full border-2 border-purple-600 shadow-xl">
          <div className="card-body">
            <h2 className="text-white font-bold text-2xl">
              Access to Private Community Forums
            </h2>
          </div>
        </div>
        {/* Card 7 */}
        <div className="card w-full border-2 border-purple-600 shadow-xl">
          <div className="card-body">
            <h2 className="text-white font-bold text-2xl">
              Project-Based Learning Approach
            </h2>
          </div>
        </div>
        {/* Card 8 */}
        <div className="card w-full border-2 border-purple-600 shadow-xl">
          <div className="card-body">
            <h2 className="text-white font-bold text-2xl">
              Certification of Completion
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAdditional;
