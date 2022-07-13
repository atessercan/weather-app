import React, { Fragment, useContext } from "react";

import LocationInput from "./LocationInput";
import TodaysCondition from "./TodaysCondition";
import NextDaysCondition from "./NextDaysCondition";
import getDay from "../getDay";
import classes from "./MainCard.module.css";
import WeatherContext from "../../context/WeatherProvider";
const MainCard = () => {
  const { weather } =useContext(WeatherContext);
  const today = getDay(weather.today).today;
  const tomorrow = getDay(weather.today).tomorrow;
  const nextday = getDay(weather.today).nextday;
  return (
    <Fragment>
      <LocationInput />
      <TodaysCondition day={today} />
      <div className={classes.forecast}>
        <NextDaysCondition index={1} day={tomorrow}/>
        <NextDaysCondition index={2} day={nextday} />
      </div>
    </Fragment>
  );
};

export default MainCard;
