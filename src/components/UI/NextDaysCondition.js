import React, { useContext } from "react";
import WeatherContext from "../../context/WeatherProvider";import classes from "./NextDayCondition.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

const NextDayCondition = (props) => {

  const { weather } = useContext(WeatherContext);

  let index = props.index;
  let day=props.day;

  return (
    <div className={classes.NextDay}>
      <div className={classes.top}>
        <div className={classes.left}>
          <div className={classes.day}>{day}</div>
          <div className={classes.maxmintemp}> 

          <div>↑{weather.forecast[index].forecastMaxTemp_c}°</div>
          <div>↓{weather.forecast[index].forecastMinTemp_c}°</div>
          </div>
        </div>
        <div className={classes.right}>
          <img src={weather.forecast[index].condition.conditionIconUrl} />
        </div>
      </div>
      <div className={classes.bottom}>
        <div><FontAwesomeIcon icon={faDroplet} /> %{weather.forecast[index].avghumidity}</div>
        <div><FontAwesomeIcon icon={faWind} /> {weather.forecast[index].forecastMaxWindspeed}km/s</div>
      </div>
    </div>
  );
};

export default NextDayCondition;
