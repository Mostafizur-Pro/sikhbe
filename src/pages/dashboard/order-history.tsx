import DashboardBanner from "@/components/dashboard/DashboardBanner";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
s
import OrderHistoryPage from "@/components/dashboard/OrderHistory/OrderHistoryPage";
import React from "react";

const OrderHistory = () => {
  return (
    <div>
      <div className="bg-main min-h-max">
        <DashboardBanner />
        <div className="container mx-auto  ">
          <div className=" sm:grid grid-cols-4 gap-4  ">
            <DashboardSidebar />
            <div className="col-span-3 ml-3 ">
              <OrderHistoryPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
