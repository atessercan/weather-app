import React, { useContext } from "react";
import WeatherContext from "../../context/WeatherProvider";
import classes from "./GeoButton.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const GeoButton = () => {
  const {weather, setWeather } = useContext(WeatherContext);
  const onClickHandler = (e) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setWeather({
        ...weather,
        city: "",
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  return (
    <div className={classes.GeoButton}>
      <FontAwesomeIcon icon={faLocation} onClick={onClickHandler} />
    </div>
  );
};

export default GeoButton;
