import CourseAdditional from "@/components/CourseDetails/CourseAdditional";
import CourseCurriculum from "@/components/CourseDetails/CourseCurriculum";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import CourseSpecialty from "@/components/CourseDetails/CourseSpecialty";
import Cover from "@/components/Cover/Cover";

const Course = () => {
  return (
    <div className="container mx-auto bg-main text-white">
      <Cover title={"Course Details"} title2={"course"} />
      <CourseDetails />
      <CourseCurriculum />
      <CourseSpecialty />
      <CourseAdditional />
    </div>
  );
};

export default Course;
