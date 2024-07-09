import React from "react";

// Define the union type for the accordion item types
type AccordionItemType =
  | "guide"
  | "class"
  | "support"
  | "advisor"
  | "success"
  | "learning"
  | "placement";

// Define the props interface including the type
interface AccordionItemProps {
  title: string;
  content: string;
  defaultChecked?: boolean;
  type: AccordionItemType;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  defaultChecked,
  type,
}) => {
  // Define styles based on the type prop
  const styles = {
    guide: "bg-purple-800 text-purple-100",
    class: "bg-blue-800 text-blue-100",
    support: "bg-green-800 text-green-100",
    advisor: "bg-red-800 text-red-100",
    success: "bg-yellow-800 text-yellow-100",
    learning: "bg-indigo-800 text-indigo-100",
    placement: "bg-teal-800 text-teal-100",
  };

  return (
    <div
      className={`collapse collapse-plus mb-2 rounded-lg shadow-md ${styles[type]}`}
    >
      <input
        type="radio"
        name="course-accordion"
        defaultChecked={defaultChecked}
      />
      <div className="collapse-title text-xl md:text-2xl font-medium">
        {title}
      </div>
      <div className="collapse-content text-lg md:text-xl mx-5">
        <p>{content}</p>
      </div>
    </div>
  );
};

const CourseSpecialty: React.FC = () => {
  return (
    <div className="pb-10 mx-5 md:mx-10 lg:mx-20">
      <div className="text-center mb-10">
        <h1 className="font-bold text-4xl md:text-5xl ">
          Specialty Of This Course
        </h1>
      </div>

      {/* Course Details */}
      <div className="space-y-4">
        <AccordionItem
          title="Complete Web Development Guide"
          content="Dive into the dynamic world of web development with our Complete Web Development Guide. This all-encompassing course is designed for aspiring developers who seek to master both front-end and back-end technologies. Whether you are a beginner or an experienced programmer looking to expand your skill set, our course offers a structured learning path that covers the entire web development stack."
          defaultChecked={true}
          type="guide"
        />
        <AccordionItem
          title="Interactive Live Classes"
          content="Engage with live, interactive classes that provide real-time feedback and support. Each session is recorded, so you can review and reinforce your learning at any time."
          type="class"
        />
        <AccordionItem
          title="Unlimited Support (Up to 2 Times)"
          content="Access one-on-one support from our expert instructors. Whether you're stuck on a tricky coding problem or need guidance on a project, we're here to help."
          type="support"
        />
        <AccordionItem
          title="Dedicated Job Placement Advisor"
          content="Receive personalized assistance from a job placement advisor who will help you navigate the job market, refine your resume, and connect with potential employers."
          type="advisor"
        />
        <AccordionItem
          title="Verified Success Rate"
          content="Join a course that boasts a proven track record of helping students secure jobs in the tech industry. Our verified success rate is a testament to the effectiveness of our curriculum and support services."
          type="success"
        />
        <AccordionItem
          title="Live Conceptual Learning Sessions"
          content="Participate in sessions focused on key web development concepts. These sessions are designed to deepen your understanding through hands-on practice and interactive discussions."
          type="learning"
        />
        <AccordionItem
          title="Global Job Placement Opportunities"
          content="Expand your horizons with job placement opportunities that extend beyond borders. We connect you with employers worldwide, opening doors to exciting global career prospects."
          type="placement"
        />
      </div>
    </div>
  );
};

export default CourseSpecialty;
