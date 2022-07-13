import React, { useCallback, useContext, useEffect, useState } from "react";
import WeatherContext from "../context/WeatherProvider";
import classes from "./Status.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const FetchWeatherForecast = () => {
  const { weather, setWeather } = useContext(WeatherContext);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const getWeatherData = useCallback(async () => {
    setError("");
    setIsloading(true);

    let city;
    if (weather.city !== "") {
      city = weather.city;
    } else if (weather.city === "") {
      city = `${weather.lat},${weather.lon}`;
    }
    try {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=0e2615296c9a4d99a51134317220507&q=${city}&days=7&aqi=no&alerts=no&lang=tr`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(" Veri alınamadı");
      }
      const data = await response.json();
      const locData = await data.location;
      const localtime = await locData.localtime;
      const current = await data.current;
      const forecast = await data.forecast.forecastday;
      const date=new Date(localtime)
      const day=date.getDay();

      setWeather({
        city: locData.name,
        lat: locData.lat,
        lon: locData.lon,
        today: day,
        currentConditionText: current.condition.text,
        currentConditionIconUrl: current.condition.icon,
        currentTemp_c: current.temp_c,
        currentFeelslike_c: current.feelslike_c,
        currentHumidity: current.humidity,
        CurrentWindSpeed_kmh: current.wind_kph,
        forecast: [
          {
            condition : {
              conditionIconUrl: forecast[0].day.condition.icon,
              conditionText: forecast[0].day.condition.text,
            },
            avghumidity: forecast[0].day.avghumidity,
            forecastMaxTemp_c: forecast[0].day.maxtemp_c,
            forecastMinTemp_c: forecast[0].day.mintemp_c,
            forecastMaxWindspeed: forecast[0].day.maxwind_kph,
          },
          {
            condition : {
              conditionIconUrl: forecast[1].day.condition.icon,
              conditionText: forecast[1].day.condition.text,
            },
            avghumidity: forecast[1].day.avghumidity,
            forecastMaxTemp_c: forecast[1].day.maxtemp_c,
            forecastMinTemp_c: forecast[1].day.mintemp_c,
            forecastMaxWindspeed: forecast[1].day.maxwind_kph,
          },
          {
            condition : {
              conditionIconUrl: forecast[2].day.condition.icon,
              conditionText: forecast[2].day.condition.text,
            },
            avghumidity: forecast[2].day.avghumidity,
            forecastMaxTemp_c: forecast[2].day.maxtemp_c,
            forecastMinTemp_c: forecast[2].day.mintemp_c,
            forecastMaxWindspeed: forecast[2].day.maxwind_kph,
          },
        ],
        lastUpdated: current.last_updated,
        updateClick: false,
      });
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, [weather.city, weather.lat, weather.lon, setWeather]);

  useEffect(() => {
    getWeatherData();
  }, [getWeatherData, weather.updateClick]);
  return (
    <div className={classes.Status}>
      <div className={classes.Error}>{error === "" ? "" : error}</div>
      <div className={isLoading ? classes.show : classes.hide}>
        <FontAwesomeIcon icon={faSpinner} size="xs" />
      </div>
    </div>
  );
};

export default FetchWeatherForecast;
