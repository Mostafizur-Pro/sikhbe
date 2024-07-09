import React from "react";

const Dashboard = () => {
  return (
    <div className="text-gray-900 dark:text-white mb-10">
      <div className="lg:col-start-4 lg:col-span-9">
        <div className="p-4 md:p-8 mb-6 shadow-md dark:shadow-md-dark rounded-md bg-white dark:bg-gray-800">
          <div className="mb-6 pb-4 border-b-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>
          <div>
            <div className="border border-gray-600 mb-5">
              <h1 className="text-xl bg-gray-700 text-white uppercase p-2 font-bold">
                Class Links
              </h1>
              <div className="text-lg p-5">
                <p className="text-red-500 mb-2">
                  You will find class links only on Sat, Mon, Wed (10:15 PM -
                  11:15 PM (batch for basics)). The teacher has not yet provided
                  the class link. You can access it here before the class
                  starts.
                </p>
                <p>
                  Includes HTML, CSS, JavaScript, React, Node.js, Express.js,
                  databases, APIs, etc.
                </p>
              </div>
            </div>
            <div className="border border-gray-600 mb-5">
              <h1 className="text-xl bg-gray-700 text-white uppercase p-2 font-bold">
                Support Sessions
              </h1>
              <p className="text-lg p-5">
                Join our live support sessions up to two times per day.
              </p>
              <div className="overflow-x-auto m-5">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300"
                      >
                        Teacher Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300"
                      >
                        Service Hour
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300"
                      >
                        Availability
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        Mostafizur
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        09:00 AM - 10:00 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-900 dark:text-red-300">
                        offline
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        Mostafizur
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        08:00 PM - 09:00 PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-900 dark:text-red-300">
                        offline
                      </td>
                    </tr>

                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
            {/* <div className="border border-gray-600 mb-5">
              <h1 className="text-xl bg-gray-700 text-white uppercase p-2 font-bold">
                Class Note & Summary
              </h1>
              <p className="text-red-500 text-lg p-5">
                Click on the button below to access class notes, summaries from
                previous classes, and group practice topics based on class
                summaries.
              </p>
            </div> */}
            <div className="border border-gray-600 mb-5">
              <h1 className="text-xl bg-gray-700 text-white uppercase p-2 font-bold">
                Live Conceptual Sessions
              </h1>
              <p className="text-lg p-5">
                Attend our weekly practice days and live conceptual sessions for
                enhanced learning.
              </p>
            </div>
            <div className="border border-gray-600 mb-5">
              <h1 className="text-xl bg-gray-700 text-white uppercase p-2 font-bold">
                Class Videos
              </h1>
              <div className="text-lg p-5">
                <button className="btn mr-4 bg-green-700 text-white font-bold text-lg border-none rounded-md hover:bg-[#a93315] hover:scale-105 transition-transform duration-300 ease-in-out">
                  Live Recorded Video
                </button>
                <button className="btn mr-4 bg-green-700 text-white font-bold text-lg border-none rounded-md hover:bg-[#a93315] hover:scale-105 transition-transform duration-300 ease-in-out">
                  Bonus Video
                </button>
                <button className="btn mr-4 bg-green-700 text-white font-bold text-lg border-none rounded-md hover:bg-[#a93315] hover:scale-105 transition-transform duration-300 ease-in-out">
                  Live Conceptual Session Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
