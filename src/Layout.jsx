import { useState } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

/**
 * This component renders the layout of the application.
 *
 * @returns {ReactNode} A React component that renders the layout of the application.
 */
const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    return (
        <div className="bg-main-bg text-main-color flex h-screen">
            <Sidebar sidebarOpen={sidebarOpen} />
            <div
                className={`w-full h-full flex flex-col${
                    sidebarOpen ? " ml-24 md:ml-56" : ""
                }`}>
                <Navbar toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
