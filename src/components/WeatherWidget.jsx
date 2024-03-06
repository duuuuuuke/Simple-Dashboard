/* eslint-disable react/prop-types */
/**
 * This component renders the weather widget.
 *
 * @param {Object} props The props for the component
 * @param {Object} props.weatherData The weather data
 * @returns {ReactNode} A React component that renders the weather widget
 */
const WeatherWidget = ({ weatherData }) => {
    return (
        <>
            {weatherData.success ? (
                <div className="widget h-full flex justify-around items-center md:flex-col">
                    <div className="flex flex-col items-center">
                        <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                            className="w-20 md:w-40"
                        />
                        <p className="text-xl font-bold md:text-5xl">
                            {Math.floor(weatherData.main.temp)}°C
                        </p>
                        <p className="md:text-3xl">{weatherData.name}</p>
                    </div>
                    <div className="flex flex-col gap-8 md:flex-row md:gap-20">
                        <div className="md:text-xl">
                            <p>{weatherData.main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                        <div className="md:text-xl">
                            <p>{weatherData.wind.speed}m/s</p>
                            <p>Wind</p>
                        </div>
                    </div>
                </div>
            ) : (
                <h1>{weatherData.error}</h1>
            )}
        </>
    );
};

export default WeatherWidget;
