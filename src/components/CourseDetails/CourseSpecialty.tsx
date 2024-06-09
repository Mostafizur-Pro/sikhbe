import React from "react";

const CourseSpecialty = () => {
  return (
    <div className="pb-10 mx-5 md:mx-10 lg:mx-20">
      <div className="text-center mb-10">
        <h1 className="font-bold text-4xl md:text-5xl text-purple-600">
          Specialty Of This Course
        </h1>
      </div>

      {/* Start */}
      <div className="collapse collapse-plus bg-gray-800 mb-2 rounded-lg shadow-md">
        <input type="radio" name="course-accordion" defaultChecked />
        <div className="collapse-title text-xl md:text-2xl font-medium text-purple-600">
          Complete Web Development Guide
        </div>
        <div className="collapse-content text-lg md:text-xl text-gray-200 mx-5">
          <p>
            Dive into the dynamic world of web development with our Complete Web
            Development Guide. This all-encompassing course is designed for
            aspiring developers who seek to master both front-end and back-end
            technologies. Whether you are a beginner or an experienced
            programmer looking to expand your skill set, our course offers a
            structured learning path that covers the entire web development
            stack.
          </p>
        </div>
      </div>

      {/* 1 */}
      <div className="collapse collapse-plus bg-gray-800 mb-2 rounded-lg shadow-md">
        <input type="radio" name="course-accordion" />
        <div className="collapse-title text-xl md:text-2xl font-medium text-purple-600">
          Interactive Live Classes
        </div>
        <div className="collapse-content text-lg md:text-xl text-gray-200 mx-5">
          <p>
            Engage with live, interactive classes that provide real-time
            feedback and support. Each session is recorded, so you can review
            and reinforce your learning at any time.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="collapse collapse-plus bg-gray-800 mb-2 rounded-lg shadow-md">
        <input type="radio" name="course-accordion" />
        <div className="collapse-title text-xl md:text-2xl font-medium text-purple-600">
          Unlimited Support (Up to 2 Times)
        </div>
        <div className="collapse-content text-lg md:text-xl text-gray-200 mx-5">
          <p>
            Access one-on-one support from our expert instructors. Whether
            you're stuck on a tricky coding problem or need guidance on a
            project, we're here to help.
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="collapse collapse-plus bg-gray-800 mb-2 rounded-lg shadow-md">
        <input type="radio" name="course-accordion" />
        <div className="collapse-title text-xl md:text-2xl font-medium text-purple-600">
          Dedicated Job Placement Advisor
        </div>
        <div className="collapse-content text-lg md:text-xl text-gray-200 mx-5">
          <p>
            Receive personalized assistance from a job placement advisor who
            will help you navigate the job market, refine your resume, and
            connect with potential employers.
          </p>
        </div>
      </div>

      {/* 4 */}
      <div className="collapse collapse-plus bg-gray-800 mb-2 rounded-lg shadow-md">
        <input type="radio" name="course-accordion" />
        <div className="collapse-title text-xl md:text-2xl font-medium text-purple-600">
          Verified Success Rate
        </div>
        <div className="collapse-content text-lg md:text-xl text-gray-200 mx-5">
          <p>
            Join a course that boasts a proven track record of helping students
            secure jobs in the tech industry. Our verified success rate is a
            testament to the effectiveness of our curriculum and support
            services.
          </p>
        </div>
      </div>

      {/* 5 */}
      <div className="collapse collapse-plus bg-gray-800 mb-2 rounded-lg shadow-md">
        <input type="radio" name="course-accordion" />
        <div className="collapse-title text-xl md:text-2xl font-medium text-purple-600">
          Live Conceptual Learning Sessions
        </div>
        <div className="collapse-content text-lg md:text-xl text-gray-200 mx-5">
          <p>
            Participate in sessions focused on key web development concepts.
            These sessions are designed to deepen your understanding through
            hands-on practice and interactive discussions.
          </p>
        </div>
      </div>

      {/* 6 */}
      <div className="collapse collapse-plus bg-gray-800 mb-2 rounded-lg shadow-md">
        <input type="radio" name="course-accordion" />
        <div className="collapse-title text-xl md:text-2xl font-medium text-purple-600">
          Global Job Placement Opportunities
        </div>
        <div className="collapse-content text-lg md:text-xl text-gray-200 mx-5">
          <p>
            Expand your horizons with job placement opportunities that extend
            beyond borders. We connect you with employers worldwide, opening
            doors to exciting global career prospects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseSpecialty;
