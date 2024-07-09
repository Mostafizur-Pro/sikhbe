import React from "react";

const JobExperiencePage = () => {
  return (
    <div className="text-white mb-10">
      <div className="lg:col-start-4 lg:col-span-9">
        <div className="p-4 md:p-8 mb-6 shadow-md dark:shadow-md-dark rounded-md bg-white dark:bg-gray-800">
          <div className="mb-6 pb-4 border-b-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Job Experience
            </h2>
          </div>
          <div>
            <ul>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">
                    Job Designation
                  </span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">Software Development</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Company Name</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">
                    International IT Association of Bangladesh
                  </span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">
                    Related to IT?
                  </span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">Yes</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">
                    Year of Experience
                  </span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">3</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Description</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">
                    Company Name: International IT Association of Bangladesh
                    Address: Mirpur 11.5 Technology: React, Laravel
                  </span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Start Date</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">September 2023</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">End Date</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">Present</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobExperiencePage;
