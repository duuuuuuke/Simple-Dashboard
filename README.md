# Simple Dashboard

A responsive dashboard that includes a weather widget, task widget, news widget, and a simple task manager.

## Steps to run locally

-   Clone this repository
-   In your terminal, go to the root folder (where `package.json` is located)
-   Run `npm install`
-   Create a `.env` file
-   Get the weather api key in [OpenWeather](https://openweathermap.org/) (NOTE: you need to wait for some hours for the api key to work after creating it)
-   Get the news api key in [NewsData](https://newsdata.io/pricing)
-   In the `.env` file setup your api keys like this:

```
VITE_WEATHER_API_KEY=<Your weather api key>
VITE_NEWS_API_KEY=<Your news api key>
```

-   Then in your terminal in the root folder run `npm run dev` and go to the url shown in the terminal

## Tech used

### React

To build this simple dashboard front-end. Next.js is kind of a overkill in my opinion. So I chose React.js

### Vite

A much faster build tool for react than CRA

### React-Router-Dom

I chose to use react router to handle route change. I also used its loader function to load data before the component renders, which will improve UX because user can see the data as soon as the component renders.

### Tailwind CSS

Easy to apply styles with the freedom of vanilla CSS. It is also modular, which means I don't have to scratch my head when trying to think of a name for a CSS class.
