import React from "react";

const EducationPage = () => {
  return (
    <div className="text-white mb-10">
      <div className="lg:col-start-4 lg:col-span-9">
        <div className="p-4 md:p-8 mb-6 shadow-md dark:shadow-md-dark rounded-md bg-white dark:bg-gray-800">
          <div className="mb-6 pb-4 border-b-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
          </div>
          <div>
            <ul>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Your Education level</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">Bachelor/Honors</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Exam/Degree Title</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">BSc In Computer Science And Engineering</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Institution Name</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">Sonargaon University</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Approximate Passing Year</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">2022</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Are you a CSE/CS student?</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">No</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Current Year</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">1st</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
