/**
 * This function gets the user's location.
 *
 * @returns {Promise} A promise that resolves to the user's location.
 */
export const getLocation = async () => {
    if ("geolocation" in navigator) {
        /* geolocation is available */
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let lat = position.coords.latitude;
                    let lon = position.coords.longitude;
                    const coords = { lat, lon };
                    resolve(coords);
                },
                (err) => {
                    console.warn(`ERROR(${err.code}): ${err.message}`);
                    resolve({ lat: -27.470125, lon: 153.021072 });
                }
            );
        });
    } else {
        /* geolocation IS NOT available */
        return { lat: -27.470125, lon: 153.021072 };
    }
};

/**
 * This function gets the weather data for a location.
 *
 * @param {number[]} coords The coordinates of the location.
 * @returns {Object} The weather data.
 */
export const getWeather = async (coords) => {
    const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${weatherApiKey}&units=metric`
    );
    if (!weatherResponse.ok) {
        throw new Error("Failed to fetch weather data");
    }
    const weatherData = await weatherResponse.json();
    return weatherData;
};

/**
 * This function gets the news data based on given query.
 *
 * @param {string} query The category of the news.
 * @returns {Object} The news data.
 */
export const getNews = async (query) => {
    const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;
    const newsResponse = await fetch(
        `https://newsdata.io/api/1/news?apikey=${newsApiKey}&category=${query}&language=en`
    );
    if (!newsResponse.ok) {
        throw new Error("Failed to fetch news data");
    }
    const newsData = await newsResponse.json();
    return newsData;
};
