import React from "react";



const LearningCenter = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-8 gap-x-8">
            <div
              className="relative z-0 mb-8 lg:mb-0 pb-0 md:pb-8 xl:pb-0 overflow-visible"
              data-aos="fade-up"
            >
              <div
                className="tilt"
                style={{
                  willChange: "transform",
                  transform:
                    "perspective(2000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                }}
              >
                <img
                  className="md:ml-16"
                  src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/about/about_2.png"
                  alt=""
                />
                <img
                  className="absolute right-0 sm:right-[-17px] md:right-36 lg:right-4 bottom-[91px] md:bottom-0"
                  src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/about/about_3.png"
                  alt=""
                />
                <img
                  className="absolute top-[-18px] left-[30px] animate-move-hor z-[-1]"
                  src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/about/about_4.png"
                  alt=""
                />
                <img
                  className="absolute top-[30%] left-0 z-[-1]"
                  src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/about/about_11.png"
                  alt=""
                />
              </div>

              <div className="px-2.5 py-3 md:py-6 border-l-4 bg-main border-primaryColor shadow-experience absolute bottom-0 left-0 dark:bg-whiteColor-dark animate-move-var w-72">
                <div className="counter flex items-center">
                  <p className="text-4xl text-primaryColor font-bold uppercase pr-2.5 leading-none">
                    <span data-countup-number="25">25</span>+
                  </p>
                  <p className="text-blackColor dark:text-blackColor-dark font-bold leading-6.5">
                    YEARS EXPERIENCE JUST ACHIVED
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up">
              <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-1.5 mb-5 rounded-full inline-block">
                About Us
              </span>
              <h3 className="text-3xl md:text-4xl leading-10 md:leading-snug font-bold text-blackColor dark:text-blackColor-dark pb-6">
                Welcome to the 
                <span className="relative after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 px-2">
                   Online
                </span>
                Learning Center
              </h3>
              <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6 pl-3 border-l-2 border-primaryColor">
                25+ Contrary to popular belief, Lorem Ipsum is not simply random
                text roots in a piece of classical Latin literature from 45 BC
              </p>
              <ul className="space-y-5">
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-4 dark:bg-whitegrey1-dark"></i>
                  <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                    Lorem Ipsum is simply dummy
                  </p>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-4 dark:bg-whitegrey1-dark"></i>
                  <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                    Explore a variety of fresh educational teach
                  </p>
                </li>
                <li className="flex items-center group">
                  <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-4 dark:bg-whitegrey1-dark"></i>
                  <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                    Lorem Ipsum is simply dummy text of
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="counter flex flex-wrap py-16 lg:py-20 gap-y-8 lg:gap-y-0">
            <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
              <div className="flex gap-4">
                <div>
                  <img
                    src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/counter/counter__1.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-4xl leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="27">27</span>
                    <span>+</span>
                  </p>
                  <p className="uppercase text-blackColor font-medium leading-4.5 dark:text-blackColor-dark">
                    Total Acheivment
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
              <div className="flex gap-4">
                <div>
                  <img
                    src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/counter/counter__2.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-4xl leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="145">145</span>
                    <span>+</span>
                  </p>
                  <p className="uppercase text-blackColor font-medium leading-4.5 dark:text-blackColor-dark">
                    TOTAL STUDENTS
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
              <div className="flex gap-4">
                <div>
                  <img
                    src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/counter/counter__3.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-4xl leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="10">10</span>
                    <span>k</span>
                  </p>
                  <p className="uppercase text-blackColor font-medium leading-4.5 dark:text-blackColor-dark">
                    tOTAL INSTRUCTOR
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
              <div className="flex gap-4">
                <div>
                  <img
                    src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/counter/counter__4.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-4xl leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                    <span data-countup-number="214">214</span>
                    <span>+</span>
                  </p>
                  <p className="uppercase text-blackColor font-medium leading-4.5 dark:text-blackColor-dark">
                    OVER THE WORLD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningCenter;
