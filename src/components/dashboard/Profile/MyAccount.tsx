import React from "react";

const MyAccount = () => {
  return (
    <div className="text-white mb-10">
      <div className="lg:col-start-4 lg:col-span-9">
        <div className="p-4 md:p-8 mb-6 shadow-md dark:shadow-md-dark rounded-md bg-white dark:bg-gray-800">
          <div className="mb-6 pb-4 border-b-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Profile
            </h2>
          </div>
          <div>
            <ul>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Name</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">Mostafizur Rahman</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Email</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">mostafizur0195@gmail.com</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Student ID</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">L2B1-1366</span>
                </div>
              </li>
              <li className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed grid grid-cols-1 md:grid-cols-12 gap-x-6 mt-4">
                <div className="md:col-start-1 md:col-span-4">
                  <span className="inline-block font-medium">Phone Number</span>
                </div>
                <div className="md:col-start-5 md:col-span-8">
                  <span className="inline-block">+88 019 5016 5017</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:col-start-4 lg:col-span-9">
        <div className="p-4 md:p-8 mb-6 shadow-md dark:shadow-md-dark rounded-md bg-white dark:bg-gray-800">
          <div className="mb-6 pb-4 border-b-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recent Activity
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300"
                  >
                    Serial
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300"
                  >
                    Platform
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    1
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    Web
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    2024-07-08
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    Logged In
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    2
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    Mobile
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    2024-07-07
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    Logged Out
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    2
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    Mobile
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    2024-07-07
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    Logged Out
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
