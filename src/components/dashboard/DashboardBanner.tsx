import React from "react";

const DashboardBanner = () => {
  return (
    <div>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="border text-white rounded-xl p-5 md:p-10 rounded-5 flex justify-center md:justify-between items-center flex-wrap gap-2">
            <div className="flex items-center flex-wrap justify-center sm:justify-start ">
              <div className="mr-5">
                <img
                  src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/dashbord/dashbord__2.jpg"
                  alt=""
                  className="w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full p-1 border-2 border-darkdeep7 box-content"
                />
              </div>
              <div className="text-whiteColor font-bold text-center sm:text-start">
                <h5 className="text-xl leading-1.2 mb-5px">Welcome ..</h5>
                <h2 className="text-2xl leading-1.24">Mostafizur Rahman</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardBanner;
