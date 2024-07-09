import React, { ReactNode } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

type MainLayoutProps = {
    children: ReactNode;
};

const DashboardLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;
