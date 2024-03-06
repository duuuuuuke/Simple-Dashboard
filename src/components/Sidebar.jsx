/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

/**
 * This component renders the sidebar of the application.
 *
 * @param {Object} props The props for the component.
 * @param {boolean} props.sidebarOpen A boolean indicating whether the sidebar is open.
 * @returns {ReactNode} A React component that renders the sidebar of the application.
 */
const Sidebar = ({ sidebarOpen }) => {
    return (
        <div
            className={`${
                sidebarOpen ? "block " : "hidden "
            } w-24 md:w-56 fixed border-r-2 border-r-soft-bg h-full`}>
            <ul className="mt-10">
                <li className="sidebar-links">
                    <Link to="/" className="block">
                        Home
                    </Link>
                </li>
                <li className="sidebar-links">
                    <Link to="/tasks" className="block">
                        Tasks
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
