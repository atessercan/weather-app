import React, { useContext } from "react";
import classes from "./Select.module.css";
import WeatherContext from "../../context/WeatherProvider";
import Cities from "../Cities";
const Select = () => {
  const {weather, setWeather } = useContext(WeatherContext);
  const onChangeHandler = (e) => {
    setWeather({
      ...weather,
      city: e.target.value,
      lat: "",
      lon: "",
    });
  };
  const cities = Array.from(Cities());
  return (
    <React.Fragment>
      <select className={classes.select} onChange={onChangeHandler}>
        {cities.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Select;
