import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSidebar = () => {
  const pathname = usePathname();

  const NavLInks = [
    { id: 1, name: "Profile", path: "/dashboard" },
    { id: 2, name: "Education", path: "/dashboard/education" },
    { id: 3, name: "Job Experience", path: "/dashboard/job-experience" },
    { id: 4, name: "Order History", path: "/dashboard/order-history" },
    { id: 5, name: "Certification", path: "/dashboard/certification" },
  ];

  return (
    <div className="mb-10">
      <div className="col-span-1 bg-gray-800 rounded-md h-[60vh] ">
        <ul className="">
          {NavLInks.map((link) => (
            <li
              key={link.id}
              className={`px-[15px] py-[15px]  ${
                link.path === pathname
                  ? "active-Navlink rounded-md"
                  : "normal-Navlink rounded-md hover:bg-gray-700"
              }`}
            >
              <Link className="text-white text-xl" href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
