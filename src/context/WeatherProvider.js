import React, { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => { 

  const defaultLocation = {
    city: "",
    lat: 37.0,
    lon: 35.321335,
  };
  const [weather, setWeather] = useState({
    ...defaultLocation,
    today: 1,
    currentConditionText: "",
    currentConditionIconUrl: "",
    currentTemp_c: 23,
    currentFeelslike_c: 22,
    currentHumidity: 45,
    CurrentWindSpeed_kmh: 13,
    forecast: [
      {
        condition : {
          conditionIconUrl: "",
          conditionText: "",
        },
        avghumidity: 50,
        forecastMaxTemp_c: 30,
        forecastMinTemp_c: 20,
        forecastMaxWindspeed: 10,
      },
      {
        condition : {
          conditionIconUrl: "",
          conditionText: "",
        },
        avghumidity: 50,
        forecastMaxTemp_c: 30,
        forecastMinTemp_c: 20,
        forecastMaxWindspeed: 10,
      },
      {
        condition : {
          conditionIconUrl: "",
          conditionText: "",
        },
        avghumidity: 50,
        forecastMaxTemp_c: 30,
        forecastMinTemp_c: 20,
        forecastMaxWindspeed: 10,
      },
    ],
    lastUpdated: "2022-07-12 17:15",
    updateClick: false,
  });

  const values = {
    weather,
    setWeather,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
