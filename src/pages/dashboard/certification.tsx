import CertificationPage from "@/components/dashboard/Certification/CertificationPage";
import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

import React from "react";

const Certification = () => {
  return (
    <div>
      <div className="bg-main min-h-max">
        <DashboardBanner />
        <div className="container mx-auto  ">
          <div className=" sm:grid grid-cols-4 gap-4  ">
            <DashboardSidebar />
            <div className="col-span-3 ml-3 ">
              <CertificationPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
