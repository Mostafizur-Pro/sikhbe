import React from "react";

const CourseAdditional = () => {
  return (
    <div className="pb-10 text-center my-10">
      <div className="text-center mb-10">
        <h1 className="font-bold text-4xl md:text-5xl mb-10">
          Additional Features Of This Course
        </h1>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {/* Card 1 */}
        <FeatureCard
          title="Portfolio Review and Feedback"
          borderColor="border-purple-600"
        />
        {/* Card 2 */}
        <FeatureCard
          title="Lifetime Access to Course Material"
          borderColor="border-purple-600"
        />
        {/* Card 3 */}
        <FeatureCard
          title="Monthly Q&A Sessions with Instructors"
          borderColor="border-purple-600"
        />
        {/* Card 4 */}
        <FeatureCard
          title="Career Development Workshops"
          borderColor="border-purple-600"
        />
        {/* Card 5 */}
        <FeatureCard
          title="Interview Preparation Session"
          borderColor="border-purple-600"
        />
        {/* Card 6 */}
        <FeatureCard
          title="Access to Private Community Forums"
          borderColor="border-purple-600"
        />
        {/* Card 7 */}
        <FeatureCard
          title="Project-Based Learning Approach"
          borderColor="border-purple-600"
        />
        {/* Card 8 */}
        <FeatureCard
          title="Certification of Completion"
          borderColor="border-purple-600"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, borderColor }) => {
  return (
    <div className={`card w-full border-2 ${borderColor} shadow-xl`}>
      <div className="card-body">
        <h2 className="text-white font-bold text-2xl">{title}</h2>
      </div>
    </div>
  );
};

export default CourseAdditional;
