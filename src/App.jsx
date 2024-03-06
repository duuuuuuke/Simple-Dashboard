import Layout from "./Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { loader as homeLoader } from "./pages/Home";

/**
 * This is the router configuration for the application.
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home />, loader: homeLoader },
            { path: "tasks", element: <Tasks /> }
        ]
    }
]);

/**
 * This component renders the application.
 *
 * @returns {ReactNode} A React component that renders the application.
 */
function App() {
    return <RouterProvider router={router} />;
}

export default App;
