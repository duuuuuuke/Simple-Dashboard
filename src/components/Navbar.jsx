/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";

/**
 * This component renders the navbar of the application.
 *
 * @param {Object} props The props for the component.
 * @param {Function} props.toggleSidebar The function to toggle the sidebar.
 * @returns {ReactNode} A React component that renders the navbar of the application.
 */
const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="min-h-[6%] flex border-b-2 border-b-soft-bg px-4 py-3">
            <div className="flex items-center text-xl">
                <FaBars
                    className="cursor-pointer me-4"
                    onClick={toggleSidebar}
                />
                <span>Dashboard</span>
            </div>
        </nav>
    );
};

export default Navbar;
