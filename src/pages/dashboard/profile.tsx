import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MyAccount from "@/components/dashboard/Profile/MyAccount";

import React from "react";

const index = () => {
  return (
    <div className="bg-main">
      <DashboardBanner/>
      <div className="container mx-auto">
        <div className=" sm:grid grid-cols-4 gap-4  ">
          <DashboardSidebar />
          <div className="col-span-3 ml-3 h-full">
            <MyAccount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
