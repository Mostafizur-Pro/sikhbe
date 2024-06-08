import CourseDetails from "@/components/CourseDetails/CourseDetails";
import Cover from "@/components/Cover/Cover";

const Course = () => {
  return (
    <div className="container mx-auto bg-main text-white">
      <Cover title={"Course Details"} title2={"course"} />
      <CourseDetails />
    </div>
  );
};

export default Course;
