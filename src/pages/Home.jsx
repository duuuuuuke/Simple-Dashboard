import { useLoaderData } from "react-router-dom";
import TaskWidget from "../components/TaskWidget";
import WeatherWidget from "../components/WeatherWidget";
import NewsWidget from "../components/NewsWidget";
import { getLocation, getWeather } from "../api";

/**
 * This is the loader function for the home page. It fetches the tasks and weather data.
 *
 * @returns {Object} An object containing the tasks and weather data.
 */
export const loader = async () => {
    const data = {};
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    data.tasks = tasks;
    // get user's location
    const coords = await getLocation();

    // fetch weather data
    try {
        const wData = await getWeather(coords);
        data.weatherData = { success: true, ...wData };
    } catch (error) {
        data.weatherData = { success: false, error: error.message };
    }

    return data;
};

/**
 * This component renders the home page of the application.
 *
 * @returns {ReactNode} A React component that renders the home page of the application.
 */
const Home = () => {
    const { tasks, weatherData } = useLoaderData();
    return (
        <div className="h-[94%] home-grid p-8 sm:p-12">
            <TaskWidget tasks={tasks} />
            <WeatherWidget weatherData={weatherData} />
            <NewsWidget />
        </div>
    );
};

export default Home;
