import Cover from "@/components/Cover/Cover";
import Faq from "@/components/Faq/Faq";

import React from "react";

const index = () => {
  return (
    <div className=" bg-main text-white">
      <Cover title={"Frequently Asked Questions"} title2={"FAQ"} />
      <Faq />
      {/* <CourseDetails />
        <CourseCurriculum />
        <CourseSpecialty />
        <CourseAdditional /> */}
    </div>
  );
};

export default index;
