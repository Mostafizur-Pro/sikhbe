import React from "react";

const CourseCurriculum = () => {
  return (
    <div className="pb-10 text-center">
      <div className="text-center mb-10">
        <h1 className="font-bold text-5xl">Curriculum Overview</h1>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
        {/* Level 1 */}
        <CurriculumCard
          level="Level 1"
          description="Start your journey by mastering the essentials: HTML, CSS, and Bootstrap."
        />
        {/* Level 2 */}
        <CurriculumCard
          level="Level 2"
          description="Advance to Tailwind CSS, DaisyUI, core JavaScript concepts, functions, and objects."
        />
        {/* Level 3 */}
        <CurriculumCard
          level="Level 3"
          description="Dive deeper into JavaScript with DOM manipulation, API integration, ES6 features, debugging, and developer tools."
        />
        {/* Level 4 */}
        <CurriculumCard
          level="Level 4"
          description="Learn React, including React Router, hooks, context API, Tanstack query, Axios, payment integration, and data visualization with Recharts."
        />
        {/* Level 5 */}
        <CurriculumCard
          level="Level 5"
          description="Discover backend technologies such as Firebase, Node.js, Express, and MongoDB."
        />
        {/* Level 6 */}
        <CurriculumCard
          level="Level 6"
          description="[Advanced] Delve deeper into backend development with Firebase, Node.js, Express, and MongoDB. Learn to build secure APIs using JWT tokens."
        />
      </div>
    </div>
  );
};

interface CurriculumCardProps {
  level: string;
  description: string;
}

const CurriculumCard: React.FC<CurriculumCardProps> = ({ level, description }) => {
  return (
    <div className="card w-full bg-gray-900 p-5 sm:p-6 lg:p-8 rounded-lg shadow-md">
      <div className="card-body text-start">
        <h2 className="text-green-600 font-bold text-2xl mb-2">{level}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default CourseCurriculum;
