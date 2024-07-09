import DashboardBanner from '@/components/dashboard/DashboardBanner';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import EducationPage from '@/components/dashboard/Education/EducationPage';
import JobExperiencePage from '@/components/dashboard/JobExperiencePage/JobExperiencePage';
import React from 'react';

const JobExperience = () => {
    return (
        <div>
        <div className="bg-main min-h-max">
          <DashboardBanner />
          <div className="container mx-auto  ">
            <div className=" sm:grid grid-cols-4 gap-4  ">
              <DashboardSidebar />
              <div className="col-span-3 ml-3 ">
                <JobExperiencePage />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobExperience;