import React from 'react';
import GeoButton from './GeoButton';
import Select from './Select';
import classes from "./LocationInput.module.css"
import FetchWeatherForecast from '../FetchWeatherForecast';
const LocationInput = () => {
  return (
    <div className={classes.LocationInput}>
      <GeoButton />
      <Select />
      <FetchWeatherForecast />
    </div>
  );
};

export default LocationInput;