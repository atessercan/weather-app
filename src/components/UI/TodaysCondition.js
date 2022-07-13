import React, { useContext } from "react";
import WeatherContext from "../../context/WeatherProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import classes from "./TodayConditions.module.css";

const TodaysCondition = (props) => {
  const { weather, setWeather } = useContext(WeatherContext);

  const updateClickHandler = (e) => {
    setWeather({
      ...weather,
      updateClick: true,
    });
  };

  let day=props.day;
  
  return (
    <div className={classes.today_card}>
      <div className={classes.top}>
        <div className={classes.update_info}>
          <span>{weather.lastUpdated}</span>
          <FontAwesomeIcon
            icon={faRefresh}
            size="1x"
            className={classes.update_icon}
            onClick={updateClickHandler}
          />
        </div>
      </div>
      <div className={classes.middle}>
        <div className={classes.city_name}>
          <span>{weather.city}</span>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <div className={classes.day}>{day}</div>
          <div className={classes.temps}>
            <div className={classes.temps_top}>
              <span className={classes.current_temp}>
                {weather.currentTemp_c}°
              </span>
              <span className={classes.feels_like}>
                Hissedilen: {weather.currentFeelslike_c}°
              </span>
            </div>
            <div className={classes.temps_bottom}>
              <div className={classes.maxmin_temp}>
                <span>↑{weather.forecast[0].forecastMaxTemp_c}°</span>
                <span>↓{weather.forecast[0].forecastMinTemp_c}°</span>
              </div>
              <div className={classes.other_info}>
                <span>
                  <FontAwesomeIcon icon={faDroplet} /> %
                  {weather.currentHumidity}
                </span>
                <span>
                  <FontAwesomeIcon icon={faWind} />{" "}
                  {weather.CurrentWindSpeed_kmh}km/s
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.condition_icon}>
            <img
              alt={weather.currentConditionText}
              src={weather.currentConditionIconUrl}
              width="120px"
              height="120px"
            ></img>
          </div>
          <div className={classes.condition_text}>
            {weather.currentConditionText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysCondition;
